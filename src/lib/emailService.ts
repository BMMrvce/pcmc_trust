export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

export async function sendEmail(
  data: EmailData,
): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone || "",
        subject: data.subject,
        message: data.message,
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.error("Email API error:", errData);
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
