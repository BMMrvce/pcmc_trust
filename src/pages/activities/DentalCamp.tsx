import { Smile, CheckCircle } from 'lucide-react';

const DentalCamp = () => {
  return (
    <div>
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
          <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Dental Camp</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Free dental care and oral health education for communities
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our dental camps provide free dental check-ups, treatments, and education about oral hygiene 
              to communities that lack access to dental care facilities. We partner with qualified dentists 
              and dental institutions to ensure quality service.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card">
                <Smile className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Services Provided</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Free dental check-ups and consultations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Basic dental treatments and cavity fillings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Tooth extractions when necessary</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Oral hygiene education and awareness</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Free dental hygiene kits distribution</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-primary-50">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Impact</h3>
                <p className="text-gray-700 mb-6">
                  Our dental camps have helped hundreds of people receive essential dental care 
                  and learn about proper oral hygiene practices, improving their overall health and quality of life.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary-600 mb-1">500+</div>
                    <div className="text-sm text-gray-600">Patients Treated</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-600 mb-1">20+</div>
                    <div className="text-sm text-gray-600">Camps Organized</div>
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

export default DentalCamp;
