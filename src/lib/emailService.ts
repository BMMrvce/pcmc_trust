export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

function buildAdminHtml(data: EmailData, safePhone: string): string {
  return `<!doctype html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#fdf6ef;font-family:'Segoe UI',Arial,sans-serif;color:#3b2f1e;">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#fdf6ef;padding:28px 16px;">
<tr><td align="center">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:620px;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(90,60,20,0.10);">

  <!-- Header -->
  <tr><td style="background:linear-gradient(135deg,#d35400 0%,#e67e22 100%);padding:26px 30px;">
    <div style="font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:#fde8d0;">Parvathamma Channajamma Memorial Charitable Trust</div>
    <div style="font-size:22px;font-weight:700;color:#fff;margin-top:8px;">📩 New Contact Message</div>
  </td></tr>

  <!-- Details -->
  <tr><td style="padding:26px 30px;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="font-size:14px;color:#4a3c28;">
      <tr><td style="padding:8px 0;font-weight:700;width:110px;vertical-align:top;color:#d35400;">Name</td><td style="padding:8px 0;">${data.name}</td></tr>
      <tr><td style="padding:8px 0;font-weight:700;vertical-align:top;color:#d35400;">Email</td><td style="padding:8px 0;"><a href="mailto:${data.email}" style="color:#d35400;text-decoration:none;">${data.email}</a></td></tr>
      <tr><td style="padding:8px 0;font-weight:700;vertical-align:top;color:#d35400;">Phone</td><td style="padding:8px 0;">${safePhone}</td></tr>
      <tr><td style="padding:8px 0;font-weight:700;vertical-align:top;color:#d35400;">Subject</td><td style="padding:8px 0;">${data.subject}</td></tr>
    </table>

    <div style="margin-top:22px;padding:18px;background:#fef9f3;border-left:4px solid #e67e22;border-radius:8px;font-size:14px;line-height:1.7;color:#3b2f1e;">
      ${data.message.replace(/\n/g, "<br/>")}
    </div>
  </td></tr>

  <!-- Footer -->
  <tr><td style="padding:16px 30px;background:#fef5eb;text-align:center;font-size:11px;color:#a07040;">
    Sent from pcmctrust.org contact form
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

function buildThankYouHtml(
  safeName: string,
  safeSubject: string,
  year: number,
  fromEmail: string,
): string {
  return `<!doctype html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#fdf6ef;font-family:'Segoe UI',Arial,sans-serif;color:#3b2f1e;">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#fdf6ef;padding:32px 16px;">
<tr><td align="center">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:580px;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(90,60,20,0.10);">

  <!-- Header -->
  <tr><td style="background:linear-gradient(135deg,#d35400 0%,#e67e22 100%);padding:32px 30px;text-align:center;">
    <div style="font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:#fde8d0;">PCMC Trust</div>
    <div style="font-size:26px;font-weight:700;color:#fff;margin-top:8px;">Thank You for Reaching Out 🙏</div>
  </td></tr>

  <!-- Body -->
  <tr><td style="padding:30px 30px 10px;">
    <p style="margin:0 0 16px;font-size:17px;font-weight:600;color:#3b2f1e;">Dear ${safeName},</p>
    <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#5a4a34;">
      Thank you for contacting <strong>Parvathamma Channajamma Memorial Charitable Trust</strong>.
      We have received your message regarding <em>"${safeSubject}"</em> and our team will review it shortly.
    </p>
    <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#5a4a34;">
      We typically respond within 1–2 working days. If your matter is urgent, please feel free to
      call us directly.
    </p>
  </td></tr>

  <!-- Divider -->
  <tr><td style="padding:0 30px;">
    <div style="border-top:1px solid #f0e0cc;margin:10px 0 20px;"></div>
  </td></tr>

  <!-- About the trust -->
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

  <!-- Our work highlights -->
  <tr><td style="padding:0 30px 24px;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td style="width:33%;text-align:center;padding:10px 6px;">
          <div style="font-size:24px;">🏥</div>
          <div style="font-size:12px;color:#6b5940;margin-top:4px;">Medical Camps</div>
        </td>
        <td style="width:33%;text-align:center;padding:10px 6px;">
          <div style="font-size:24px;">📚</div>
          <div style="font-size:12px;color:#6b5940;margin-top:4px;">Education</div>
        </td>
        <td style="width:33%;text-align:center;padding:10px 6px;">
          <div style="font-size:24px;">🤝</div>
          <div style="font-size:12px;color:#6b5940;margin-top:4px;">Social Welfare</div>
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- Contact info -->
  <tr><td style="padding:0 30px 28px;">
    <div style="background:#fff7f0;border:1px solid #f0dcc8;padding:18px;border-radius:10px;font-size:13px;color:#5a4a34;">
      <p style="margin:0 0 6px;"><strong>📧 Email:</strong> ${fromEmail}</p>
      <p style="margin:0 0 6px;"><strong>📍 Location:</strong> Bangalore, Karnataka, India</p>
      <p style="margin:0;"><strong>🌐 Website:</strong> <a href="https://pcmctrust.org" style="color:#d35400;text-decoration:none;">pcmctrust.org</a></p>
    </div>
  </td></tr>

  <!-- Sign off -->
  <tr><td style="padding:0 30px 26px;">
    <p style="margin:0;font-size:15px;color:#5a4a34;">With warm regards,</p>
    <p style="margin:4px 0 0;font-size:15px;font-weight:700;color:#d35400;">PCMC Trust Team</p>
  </td></tr>

  <!-- Footer -->
  <tr><td style="padding:18px 30px;background:#fef5eb;text-align:center;font-size:11px;color:#a07040;">
    Parvathamma Channajamma Memorial Charitable Trust · Bangalore, Karnataka · ${year}<br/>
    <span style="font-size:10px;">This is an automated confirmation. Please do not reply to this email.</span>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

export async function sendEmail(
  data: EmailData,
): Promise<{ success: boolean; message: string }> {
  try {
    const apiKey = import.meta.env.VITE_BREVO_API_KEY;
    const fromEmail = import.meta.env.VITE_BREVO_FROM_EMAIL;
    const fromName = import.meta.env.VITE_BREVO_FROM_NAME || "PCMC Trust";
    const toEmail = import.meta.env.VITE_BREVO_TO_EMAIL;

    if (!apiKey || !fromEmail || !toEmail) {
      console.warn(
        "Brevo configuration is missing, but message will be saved to database",
      );
      return {
        success: true,
        message: "Message received! We will get back to you soon.",
      };
    }

    const safePhone = data.phone?.trim() || "Not provided";
    const safeName = data.name?.trim() || "Friend";
    const safeSubject = data.subject?.trim() || "your message";
    const year = new Date().getFullYear();

    // Send notification email to admin/trust
    const businessEmailResponse = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",
        headers: { "api-key": apiKey, "Content-Type": "application/json" },
        body: JSON.stringify({
          sender: { email: fromEmail, name: fromName },
          to: toEmail
            .split(",")
            .map((e: string) => ({ email: e.trim(), name: "PCMC Trust Team" })),
          replyTo: { email: data.email, name: data.name },
          subject: `New contact message: ${data.subject}`,
          htmlContent: buildAdminHtml(data, safePhone),
        }),
      },
    );

    // Send thank-you email to the person who contacted
    const clientEmailResponse = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",
        headers: { "api-key": apiKey, "Content-Type": "application/json" },
        body: JSON.stringify({
          sender: { email: fromEmail, name: fromName },
          to: [{ email: data.email, name: data.name }],
          subject: "Thanks for contacting PCMC Trust",
          htmlContent: buildThankYouHtml(
            safeName,
            safeSubject,
            year,
            fromEmail,
          ),
        }),
      },
    );

    if (!businessEmailResponse.ok) {
      console.error(
        "Brevo admin email error:",
        await businessEmailResponse.text(),
      );
    }
    if (!clientEmailResponse.ok) {
      console.error(
        "Brevo client email error:",
        await clientEmailResponse.text(),
      );
    }

    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: true,
      message: "Message received! We will get back to you soon.",
    };
  }
}
