import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config({ path: '.env.local' });
dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 4000;

app.use(express.json({ limit: '1mb' }));

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

const requiredFields = ['name', 'email', 'subject', 'message'];

const formatList = (value) =>
  value
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((email) => ({ email }));

const buildThankYouEmail = ({ name, subject }) => {
  const safeName = name?.trim() || 'Friend';
  const safeSubject = subject?.trim() || 'your message';
  const year = new Date().getFullYear();

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Thank You</title>
  </head>
  <body style="margin:0; padding:0; background-color:#d9e8f2; font-family:Arial, Helvetica, sans-serif; color:#1a2b3b;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#d9e8f2; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px; background:#ffffff; border-radius:18px; overflow:hidden; box-shadow:0 10px 30px rgba(13, 30, 47, 0.15);">
            <tr>
              <td style="background:#c8dbe8; padding:28px 32px; text-align:left;">
                <div style="font-size:12px; letter-spacing:2px; text-transform:uppercase; color:#506b82;">PCMC Trust</div>
                <div style="font-size:28px; font-weight:700; margin-top:6px;">Thank you for reaching out</div>
                <div style="font-size:14px; margin-top:6px; color:#355167;">We received ${safeSubject} and will get back to you soon.</div>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;">
                <p style="margin:0 0 14px; font-size:16px;">Hi ${safeName},</p>
                <p style="margin:0 0 14px; font-size:15px; line-height:1.6; color:#2b3f52;">
                  Thanks for contacting PCMC Trust. Our team has your message and will reply as soon as possible.
                </p>
                <p style="margin:0 0 20px; font-size:15px; line-height:1.6; color:#2b3f52;">
                  If you have more details to share, simply reply to this email and it will reach us directly.
                </p>
                <div style="text-align:center; margin:24px 0 8px;">
                  <span style="display:inline-block; background:#0d1e2f; color:#ffffff; padding:12px 24px; border-radius:999px; font-size:13px; letter-spacing:1px; text-transform:uppercase;">We will be in touch</span>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px; background:#f4f8fb; font-size:12px; color:#5b7286; text-align:center;">
                PCMC Trust · Bangalore, Karnataka · ${year}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

const buildAdminEmail = ({ name, email, phone, subject, message }) => {
  const safePhone = phone?.trim() || 'Not provided';

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New Contact Message</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f2f6f9; font-family:Arial, Helvetica, sans-serif; color:#1a2b3b;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f2f6f9; padding:24px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 8px 22px rgba(15, 30, 45, 0.12);">
            <tr>
              <td style="padding:24px 28px; background:#0d1e2f; color:#ffffff;">
                <div style="font-size:12px; letter-spacing:2px; text-transform:uppercase; opacity:0.8;">PCMC Trust</div>
                <div style="font-size:22px; font-weight:700; margin-top:6px;">New Contact Form Message</div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 28px;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="font-size:14px; color:#2b3f52;">
                  <tr>
                    <td style="padding:6px 0; font-weight:700; width:140px;">Name</td>
                    <td style="padding:6px 0;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0; font-weight:700;">Email</td>
                    <td style="padding:6px 0;">${email}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0; font-weight:700;">Phone</td>
                    <td style="padding:6px 0;">${safePhone}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0; font-weight:700;">Subject</td>
                    <td style="padding:6px 0;">${subject}</td>
                  </tr>
                </table>
                <div style="margin-top:20px; padding:16px; background:#f4f8fb; border-radius:12px; color:#1a2b3b; font-size:14px; line-height:1.6;">
                  ${message.replace(/\n/g, '<br />')}
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  const payload = req.body || {};

  const missing = requiredFields.filter((field) => !payload[field]);
  if (missing.length > 0) {
    res.status(400).json({ error: `Missing fields: ${missing.join(', ')}` });
    return;
  }

  const apiKey = process.env.BREVO_API_KEY || process.env.VITE_BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL || process.env.VITE_BREVO_FROM_EMAIL;
  const senderName =
    process.env.BREVO_SENDER_NAME || process.env.VITE_BREVO_FROM_NAME || 'PCMC Trust';
  const adminEmails = process.env.ADMIN_EMAILS || process.env.VITE_BREVO_TO_EMAIL;

  if (!apiKey || !senderEmail || !adminEmails) {
    res.status(500).json({ error: 'Brevo configuration is missing.' });
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
      subject: 'Thanks for contacting PCMC Trust',
      htmlContent: buildThankYouEmail(payload),
    };

    await axios.post(BREVO_API_URL, adminPayload, {
      headers: { 'api-key': apiKey, 'content-type': 'application/json' },
    });

    await axios.post(BREVO_API_URL, thankYouPayload, {
      headers: { 'api-key': apiKey, 'content-type': 'application/json' },
    });

    res.json({ ok: true });
  } catch (error) {
    const status = error?.response?.status;
    const errorMessage = error?.response?.data || error?.message || 'Unknown error';
    res.status(status || 500).json({ error: 'Failed to send email.', details: errorMessage });
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Brevo email API listening on port ${port}`);
});
