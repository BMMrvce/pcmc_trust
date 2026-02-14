import { Activity } from 'lucide-react';

const TrustCampActivities = () => {
  return (
    <div>
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Trust Camp Activities</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Organizing various camps and activities for community welfare
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                PCMC Trust organizes various camp activities throughout the year to address different 
                needs of the community. These camps bring together resources, volunteers, and beneficiaries 
                to create meaningful impact in people's lives.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="card">
                  <Activity className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Types of Camps</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Medical and health camps</li>
                    <li>• Eye examination and treatment camps</li>
                    <li>• Dental care camps</li>
                    <li>• Blood donation drives</li>
                    <li>• Veterinary care camps</li>
                    <li>• Educational support camps</li>
                    <li>• Distribution camps (prosthetics, aids)</li>
                    <li>• Awareness and training sessions</li>
                  </ul>
                </div>

                <div className="card bg-primary-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Approach</h3>
                  <p className="text-gray-700 mb-4">
                    Each camp is carefully planned and executed with the following principles:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Needs assessment of the community</li>
                    <li>• Partnership with qualified professionals</li>
                    <li>• Free services for all beneficiaries</li>
                    <li>• Follow-up support when necessary</li>
                    <li>• Documentation and impact assessment</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Recent Camp Activities</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Our trust has successfully organized numerous camps across various locations, touching 
                the lives of thousands of people. From providing free medical care to distributing 
                artificial limbs and aids, our camps have made a significant difference in the community.
              </p>

              <div className="bg-secondary-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact Summary</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-secondary-600 mb-2">100+</div>
                    <div className="text-gray-600">Camps Organized</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary-600 mb-2">10,000+</div>
                    <div className="text-gray-600">Beneficiaries</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary-600 mb-2">50+</div>
                    <div className="text-gray-600">Villages Covered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary-600 mb-2">500+</div>
                    <div className="text-gray-600">Volunteers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustCampActivities;
