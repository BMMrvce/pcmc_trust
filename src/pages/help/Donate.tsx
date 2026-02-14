import { Heart, CreditCard, Building, CheckCircle } from 'lucide-react';

const Donate = () => {
  return (
    <div>
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Donate to Our Cause</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Your contribution makes a real difference in the lives of those we serve
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Every donation, big or small, helps us continue our mission of serving underprivileged 
              communities. Your generous contribution enables us to organize health camps, support 
              education, and provide essential services to those in need.
            </p>

            {/* Tax Benefits */}
            <div className="bg-secondary-50 border-l-4 border-secondary-600 rounded-lg p-8 mb-12">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-secondary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Tax Benefits</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    All donations to PCMC Trust are eligible for tax deduction under <strong>Section 80G</strong> of 
                    the Income Tax Act. You will receive proper receipts and certificates for your contributions.
                  </p>
                </div>
              </div>
            </div>

            {/* Donation Methods */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Ways to Donate</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Bank Transfer */}
              <div className="card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Bank Transfer</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  You may transfer directly to our bank account:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 space-y-3 text-gray-800">
                  <p><strong className="text-primary-700">Bank Name:</strong> Bank of Maharashtra</p>
                  <p><strong className="text-primary-700">Branch:</strong> Basavanagudi Branch, Bangalore – 560 004</p>
                  <p><strong className="text-primary-700">Account Type:</strong> Savings Account</p>
                  <p><strong className="text-primary-700">Account No:</strong> 60032598288</p>
                  <p><strong className="text-primary-700">MICR No:</strong> 560014003</p>
                </div>
              </div>

              {/* Cheque/DD */}
              <div className="card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Cheque / Demand Draft</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Cheques or Demand Drafts can be made in favor of:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <p className="font-bold text-primary-700 text-lg mb-2">"P C M C TRUST"</p>
                  <p className="text-gray-700 mb-3">or</p>
                  <p className="font-bold text-primary-700 text-lg">"PARVATHAMMA CHANNAJAMMA MEMORIAL CHARITABLE TRUST"</p>
                </div>
                <p className="text-gray-700">
                  Please send your cheque/DD to our office address with your contact details.
                </p>
              </div>
            </div>

            {/* Where Your Money Goes */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Where Your Money Goes</h2>
              <div className="bg-primary-50 rounded-xl p-8 mb-12">
                <p className="text-gray-700 mb-6">
                  We are committed to transparency and ensuring that your donations are used effectively 
                  to maximize impact. Your contributions support:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Medical Camps:</strong> Free health check-ups, treatments, surgeries, and medicines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Eye Care:</strong> Eye examinations, cataract surgeries, and free spectacles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Education:</strong> Scholarships, school supplies, and skill development programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Blood Donation:</strong> Organizing blood donation drives and maintaining blood banks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Social Welfare:</strong> Supporting the elderly, differently-abled, and economically disadvantaged</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Awareness Programs:</strong> Health, hygiene, and social awareness campaigns</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                <div className="flex items-start gap-4 mb-6">
                  <Heart className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Every Donation Counts</h3>
                    <p className="text-primary-100 leading-relaxed mb-6">
                      Whether you donate ₹500 or ₹50,000, every contribution helps us serve more people 
                      and create lasting impact. Your generosity enables us to continue our mission of 
                      serving humanity with compassion and dedication.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="text-2xl font-bold mb-2">₹500</div>
                    <div className="text-primary-100 text-sm">Provides medicines for 5 patients</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="text-2xl font-bold mb-2">₹2,000</div>
                    <div className="text-primary-100 text-sm">Supports a student's education for a month</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="text-2xl font-bold mb-2">₹10,000</div>
                    <div className="text-primary-100 text-sm">Helps organize a health camp</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-600 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">For More Information</h3>
                <p className="text-gray-700">
                  For any queries regarding donations, tax receipts, or to discuss specific donation 
                  opportunities, please feel free to contact us at:
                </p>
                <div className="mt-4 text-gray-800">
                  <p>Phone: 94483-09227 / 91413-09227 / 9945056219</p>
                  <p>Email: contact@pcmctrust.org, gopal@pcmctrust.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
