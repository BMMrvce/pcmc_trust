import { Stethoscope, CheckCircle } from 'lucide-react';

const GeneralHealthCamp = () => {
  return (
    <div>
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">General Health Camp</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive health check-ups and medical services for all
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our general health camps provide comprehensive medical check-ups and basic treatments 
              to underserved communities. We bring together qualified doctors and medical professionals 
              to offer quality healthcare services free of cost.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card">
                <Stethoscope className="w-12 h-12 text-secondary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Services Offered</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>General health check-ups and consultations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Blood pressure and diabetes screening</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Basic diagnostic tests</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Free medicine distribution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Health education and awareness</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Referrals for specialized care when needed</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-secondary-50">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Reach</h3>
                <p className="text-gray-700 mb-6">
                  Through our general health camps, we have reached thousands of people in rural 
                  and urban areas, providing them with essential healthcare services and early 
                  detection of health conditions.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-secondary-600 mb-1">5,000+</div>
                    <div className="text-sm text-gray-600">Patients Examined</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary-600 mb-1">50+</div>
                    <div className="text-sm text-gray-600">Camps Conducted</div>
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

export default GeneralHealthCamp;
