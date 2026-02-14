import { Scale, FileText, Shield, CheckCircle } from 'lucide-react';

const LegalFinancial = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Legal & Financial</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Transparency and accountability in all our operations
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Registration & Legal Status */}
            <div className="card scroll-reveal mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Legal Status</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Parvathamma Channajamma Memorial Charitable Trust is a registered charitable 
                  organization operating under the applicable laws and regulations. We are committed 
                  to maintaining full compliance with all legal requirements and maintaining the 
                  highest standards of governance.
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Registration Details</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Registered as a Charitable Trust under applicable laws</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Registered under Income Tax Act with 80G certification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>All donations are eligible for tax deduction under Section 80G</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Financial Transparency */}
            <div className="card scroll-reveal mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg">
                  <Scale className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Financial Transparency</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  We believe in complete transparency regarding our financial operations. All funds 
                  received by the trust are utilized solely for charitable purposes, and we maintain 
                  detailed records of all financial transactions.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Financial Principles</h3>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>100% Utilization:</strong> All donations are used directly for charitable activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Regular Audits:</strong> Our accounts are audited annually by qualified chartered accountants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Detailed Records:</strong> We maintain comprehensive records of all income and expenditure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Transparency:</strong> Financial reports are available to donors and stakeholders upon request</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Fund Utilization</h3>
                  <p className="text-gray-700 mb-4">
                    The funds received by the trust are allocated towards:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Medical camps and healthcare programs</li>
                    <li>• Educational support and scholarships</li>
                    <li>• Social welfare activities</li>
                    <li>• Awareness and cultural programs</li>
                    <li>• Administrative expenses (minimal, for operational sustainability)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Governance Structure */}
            <div className="card scroll-reveal mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg">
                  <FileText className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Governance Structure</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  The trust is managed by a Board of Trustees who oversee all operations and ensure 
                  that the organization stays true to its mission and values. The board meets regularly 
                  to review programs, approve budgets, and make strategic decisions.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Board of Trustees</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Strategic planning and oversight</li>
                      <li>• Financial management</li>
                      <li>• Program approval</li>
                      <li>• Policy development</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Management Team</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Program implementation</li>
                      <li>• Day-to-day operations</li>
                      <li>• Volunteer coordination</li>
                      <li>• Reporting and documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Tax Benefits Notice */}
            <div className="card scroll-reveal border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Tax Benefits for Donors</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All donations made to PCMC Trust are eligible for tax deduction under Section 80G 
                of the Income Tax Act. Donors will receive proper receipts and certificates for 
                their contributions, which can be used for claiming tax benefits.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For more information about donations and tax benefits, please contact us or visit 
                our donation page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalFinancial;
