import express from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config({ path: ".env.local" });
dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 4000;

app.use(express.json({ limit: "1mb" }));

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

const requiredFields = ["name", "email", "subject", "message"];

const formatList = (value) =>
  value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((email) => ({ email }));

const buildThankYouEmail = ({ name, subject }) => {
  const safeName = name?.trim() || "Friend";
  const safeSubject = subject?.trim() || "your message";
  const year = new Date().getFullYear();

  return `<!doctype html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#fdf6ef;font-family:'Segoe UI',Arial,sans-serif;color:#3b2f1e;">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#fdf6ef;padding:32px 16px;">
<tr><td align="center">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:580px;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(90,60,20,0.10);">
  <tr><td style="background:linear-gradient(135deg,#d35400 0%,#e67e22 100%);padding:32px 30px;text-align:center;">
    <div style="font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:#fde8d0;">PCMC Trust</div>
    <div style="font-size:26px;font-weight:700;color:#fff;margin-top:8px;">Thank You for Reaching Out 🙏</div>
  </td></tr>
  <tr><td style="padding:30px 30px 10px;">
    <p style="margin:0 0 16px;font-size:17px;font-weight:600;color:#3b2f1e;">Dear ${safeName},</p>
    <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#5a4a34;">
      Thank you for contacting <strong>Parvathamma Channajamma Memorial Charitable Trust</strong>.
      We have received your message regarding <em>"${safeSubject}"</em> and our team will review it shortly.
    </p>
    <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#5a4a34;">
      We typically respond within 1–2 working days. If your matter is urgent, please feel free to call us directly.
    </p>
  </td></tr>
  <tr><td style="padding:0 30px;"><div style="border-top:1px solid #f0e0cc;margin:10px 0 20px;"></div></td></tr>
  <tr><td style="padding:0 30px 24px;">
    <div style="background:#fef9f3;padding:20px;border-radius:10px;">
      <p style="margin:0 0 10px;font-size:14px;font-weight:700;color:#d35400;">About PCMC Trust</p>
      <p style="margin:0;font-size:13px;line-height:1.65;color:#6b5940;">
        PCMC Trust is a registered charitable trust based in Bangalore, Karnataka, dedicated to
        healthcare, education, social welfare, and rural development. From medical &amp; veterinary
        camps to youth awareness programmes, we strive to uplift communities across Karnataka.
      </p>
    </div>
  </td></tr>
  <tr><td style="padding:0 30px 24px;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td style="width:33%;text-align:center;padding:10px 6px;"><div style="font-size:24px;">🏥</div><div style="font-size:12px;color:#6b5940;margin-top:4px;">Medical Camps</div></td>
        <td style="width:33%;text-align:center;padding:10px 6px;"><div style="font-size:24px;">📚</div><div style="font-size:12px;color:#6b5940;margin-top:4px;">Education</div></td>
        <td style="width:33%;text-align:center;padding:10px 6px;"><div style="font-size:24px;">🤝</div><div style="font-size:12px;color:#6b5940;margin-top:4px;">Social Welfare</div></td>
      </tr>
    </table>
  </td></tr>
  <tr><td style="padding:0 30px 28px;">
    <div style="background:#fff7f0;border:1px solid #f0dcc8;padding:18px;border-radius:10px;font-size:13px;color:#5a4a34;">
      <p style="margin:0 0 6px;"><strong>📍 Location:</strong> Bangalore, Karnataka, India</p>
      <p style="margin:0;"><strong>🌐 Website:</strong> <a href="https://pcmctrust.org" style="color:#d35400;text-decoration:none;">pcmctrust.org</a></p>
    </div>
  </td></tr>
  <tr><td style="padding:0 30px 26px;">
    <p style="margin:0;font-size:15px;color:#5a4a34;">With warm regards,</p>
    <p style="margin:4px 0 0;font-size:15px;font-weight:700;color:#d35400;">PCMC Trust Team</p>
  </td></tr>
  <tr><td style="padding:18px 30px;background:#fef5eb;text-align:center;font-size:11px;color:#a07040;">
    Parvathamma Channajamma Memorial Charitable Trust · Bangalore, Karnataka · ${year}<br/>
    <span style="font-size:10px;">This is an automated confirmation. Please do not reply to this email.</span>
  </td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
};

const buildAdminEmail = ({ name, email, phone, subject, message }) => {
  const safePhone = phone?.trim() || "Not provided";

  return `<!doctype html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#fdf6ef;font-family:'Segoe UI',Arial,sans-serif;color:#3b2f1e;">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#fdf6ef;padding:28px 16px;">
<tr><td align="center">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:620px;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(90,60,20,0.10);">
  <tr><td style="background:linear-gradient(135deg,#d35400 0%,#e67e22 100%);padding:26px 30px;">
    <div style="font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:#fde8d0;">Parvathamma Channajamma Memorial Charitable Trust</div>
    <div style="font-size:22px;font-weight:700;color:#fff;margin-top:8px;">📩 New Contact Message</div>
  </td></tr>
  <tr><td style="padding:26px 30px;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="font-size:14px;color:#4a3c28;">
      <tr><td style="padding:8px 0;font-weight:700;width:110px;vertical-align:top;color:#d35400;">Name</td><td style="padding:8px 0;">${name}</td></tr>
      <tr><td style="padding:8px 0;font-weight:700;vertical-align:top;color:#d35400;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#d35400;text-decoration:none;">${email}</a></td></tr>
      <tr><td style="padding:8px 0;font-weight:700;vertical-align:top;color:#d35400;">Phone</td><td style="padding:8px 0;">${safePhone}</td></tr>
      <tr><td style="padding:8px 0;font-weight:700;vertical-align:top;color:#d35400;">Subject</td><td style="padding:8px 0;">${subject}</td></tr>
    </table>
    <div style="margin-top:22px;padding:18px;background:#fef9f3;border-left:4px solid #e67e22;border-radius:8px;font-size:14px;line-height:1.7;color:#3b2f1e;">
      ${message.replace(/\n/g, "<br/>")}
    </div>
  </td></tr>
  <tr><td style="padding:16px 30px;background:#fef5eb;text-align:center;font-size:11px;color:#a07040;">
    Sent from pcmctrust.org contact form
  </td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
};

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const payload = req.body || {};

  const missing = requiredFields.filter((field) => !payload[field]);
  if (missing.length > 0) {
    res.status(400).json({ error: `Missing fields: ${missing.join(", ")}` });
    return;
  }

  const apiKey = process.env.BREVO_API_KEY || process.env.VITE_BREVO_API_KEY;
  const senderEmail =
    process.env.BREVO_SENDER_EMAIL || process.env.VITE_BREVO_FROM_EMAIL;
  const senderName =
    process.env.BREVO_SENDER_NAME ||
    process.env.VITE_BREVO_FROM_NAME ||
    "PCMC Trust";
  const adminEmails =
    process.env.ADMIN_EMAILS || process.env.VITE_BREVO_TO_EMAIL;

  if (!apiKey || !senderEmail || !adminEmails) {
    res.status(500).json({ error: "Brevo configuration is missing." });
    return;
  }

  try {
    const adminPayload = {
      sender: { name: senderName, email: senderEmail },
      to: formatList(adminEmails),
      replyTo: { email: payload.email, name: payload.name },
      subject: `New contact message: ${payload.subject}`,
      htmlContent: buildAdminEmail(payload),
    };

    const thankYouPayload = {
      sender: { name: senderName, email: senderEmail },
      to: [{ email: payload.email, name: payload.name }],
      subject: "Thanks for contacting PCMC Trust",
      htmlContent: buildThankYouEmail(payload),
    };

    await axios.post(BREVO_API_URL, adminPayload, {
      headers: { "api-key": apiKey, "content-type": "application/json" },
    });

    await axios.post(BREVO_API_URL, thankYouPayload, {
      headers: { "api-key": apiKey, "content-type": "application/json" },
    });

    res.json({ ok: true });
  } catch (error) {
    const status = error?.response?.status;
    const errorMessage =
      error?.response?.data || error?.message || "Unknown error";
    res
      .status(status || 500)
      .json({ error: "Failed to send email.", details: errorMessage });
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Brevo email API listening on port ${port}`);
});
