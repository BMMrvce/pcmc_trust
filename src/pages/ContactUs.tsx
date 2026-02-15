import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, FormEvent } from "react";
import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";
import { sendEmail } from "../lib/emailService";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");
    setSubmitError("");

    try {
      // Step 1: Save to Supabase (primary)
      if (isSupabaseConfigured && supabase) {
        const { error: dbError } = await supabase
          .from("contact_messages")
          .insert({
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            subject: formData.subject,
            message: formData.message,
          });

        if (dbError) {
          console.error("Supabase insert error:", dbError);
          setSubmitStatus("error");
          setSubmitError(
            "Something went wrong while sending your message. Please try again.",
          );
          return;
        }
      }

      // Step 2: Send Brevo emails (best-effort, don't block success)
      sendEmail({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        phone: formData.phone,
      }).catch((err) =>
        console.error("Email sending failed (non-blocking):", err),
      );

      // Show success immediately after DB save
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setSubmitError(
        "Something went wrong while sending your message. Please try again.",
      );
    }
  };

  return (
    <div>
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                Whether you want to volunteer, donate, partner with us, or
                simply learn more about our work, we're here to help. Feel free
                to reach out to us through any of the following channels.
              </p>

              <div className="space-y-5 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">
                      Address
                    </h3>
                    <p className="text-sm text-gray-700">
                      Parvathamma Channajamma Memorial Charitable Trust
                      <br />
                      Bangalore, Karnataka
                      <br />
                      India - 560 004
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">
                      Phone
                    </h3>
                    <p className="text-sm text-gray-700">+91-XXX-XXX-XXXX</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Mon - Sat, 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">
                      Email
                    </h3>
                    <p className="text-sm text-gray-700">info@pcmctrust.org</p>
                    <p className="text-sm text-gray-700">
                      volunteer@pcmctrust.org
                    </p>
                    <p className="text-sm text-gray-700">
                      donations@pcmctrust.org
                    </p>
                  </div>
                </div>
              </div>

              {/* Donation Information */}
              <div className="card bg-primary-50 p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Bank Details for Donations
                </h3>
                <div className="space-y-1.5 text-gray-700 text-xs">
                  <p>
                    <strong>Bank Name:</strong> Bank of Maharashtra
                  </p>
                  <p>
                    <strong>Branch:</strong> Basavanagudi, Bangalore – 560 004
                  </p>
                  <p>
                    <strong>Account No:</strong> 60032598288
                  </p>
                  <p>
                    <strong>MICR No:</strong> 560014003
                  </p>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  All donations are tax-deductible under Section 80G
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card p-5">
                <h2 className="text-xl font-bold text-gray-900 mb-5">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitStatus === "success" && (
                    <div className="rounded-lg border border-green-200 bg-green-50 px-3 py-2.5 text-xs text-green-700">
                      Thank you for contacting us. We will get back to you soon!
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-xs text-red-700">
                      {submitError}
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-gray-700 mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-gray-700 mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-gray-700 mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold text-gray-700 mb-1.5"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-gray-700 mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                    disabled={submitStatus === "loading"}
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {submitStatus === "loading"
                        ? "Sending..."
                        : "Send Message"}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="card p-5">
            <h2 className="text-xl font-bold text-gray-900 mb-5 text-center">
              Find Us
            </h2>
            <div className="bg-gray-200 rounded-lg h-72 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-12 h-12 mx-auto mb-3" />
                <p>Map will be displayed here</p>
                <p className="text-xs mt-1.5">Bangalore, Karnataka, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
