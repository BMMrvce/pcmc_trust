import { Eye, CheckCircle } from 'lucide-react';

const EyeCamps = () => {
  return (
    <div>
          <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Eye Camps</h1>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Restoring vision and providing eye care to those in need
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our eye camps are organized in association with leading eye hospitals to provide 
              comprehensive eye care services. We believe that everyone deserves the gift of sight, 
              and our camps help identify and treat various eye conditions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card">
                <Eye className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Services Provided</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Comprehensive eye examinations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cataract screening and surgeries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Free prescription glasses distribution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Treatment for common eye diseases</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Diabetic retinopathy screening</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Eye care education and awareness</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-blue-50">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Partners</h3>
                <p className="text-gray-700 mb-6">
                  We collaborate with renowned eye hospitals and ophthalmologists:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li>• Sankara Eye Hospital, Bangalore</li>
                  <li>• Drishti Eye Hospital, Kanakapura</li>
                  <li>• Qualified ophthalmologists and eye care specialists</li>
                </ul>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notable Eye Camps</h2>
              
              <div className="space-y-6 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Eye Camp at Satnur</h3>
                  <p className="text-gray-600 mb-2">In association with Sankara Eye Hospital, Bangalore</p>
                  <p className="text-gray-700">
                    A successful eye camp where hundreds of patients were examined and many received 
                    free cataract surgeries and prescription glasses.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Eye Camp at Kanakapura</h3>
                  <p className="text-gray-600 mb-2">In association with Drishti Eye Hospital</p>
                  <p className="text-gray-700">
                    Comprehensive eye care services provided to rural communities, including screening, 
                    treatment, and follow-up care for various eye conditions.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Eye Camp in Hosadurga</h3>
                  <p className="text-gray-700">
                    Conducted eye examinations and distributed free spectacles to those in need, 
                    helping improve the quality of life for many beneficiaries.
                  </p>
                </div>
              </div>

              <div className="card bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <h3 className="text-2xl font-bold mb-4">Impact Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">3,000+</div>
                    <div className="text-blue-100">Patients Examined</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-blue-100">Surgeries</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">1,000+</div>
                    <div className="text-blue-100">Glasses Distributed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-blue-100">Camps Organized</div>
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

export default EyeCamps;
