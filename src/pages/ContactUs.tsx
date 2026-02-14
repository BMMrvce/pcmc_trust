import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for contacting us. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div>
      <section className="py-10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                Whether you want to volunteer, donate, partner with us, or simply learn more about 
                our work, we're here to help. Feel free to reach out to us through any of the 
                following channels.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-700">
                      Parvathamma Channajamma Memorial Charitable Trust<br />
                      Bangalore, Karnataka<br />
                      India - 560 004
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-700">94483-09227 / 91413-09227 / 9945056219</p>
                    <p className="text-sm text-gray-600 mt-1">Mon - Sat, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-700">contact@pcmctrust.org</p>
                    <p className="text-gray-700">gopal@pcmctrust.org</p>
                  </div>
                </div>
              </div>

              {/* Donation Information */}
              <div className="card bg-primary-50">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Bank Details for Donations</h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p><strong>Bank Name:</strong> Bank of Maharashtra</p>
                  <p><strong>Branch:</strong> Basavanagudi, Bangalore – 560 004</p>
                  <p><strong>Account No:</strong> 60032598288</p>
                  <p><strong>MICR No:</strong> 560014003</p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  All donations are tax-deductible under Section 80G
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
