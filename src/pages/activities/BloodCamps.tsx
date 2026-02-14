import { Heart, Droplet, Users } from 'lucide-react';

const BloodCamps = () => {
  return (
    <div>
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Blood Donation Camps</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Saving lives through voluntary blood donation drives
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Blood donation is one of the most noble acts of service. Our blood donation camps 
              help maintain adequate blood supply for emergency situations and save countless lives. 
              We organize regular blood donation drives in collaboration with blood banks and hospitals.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4 mx-auto">
                  <Droplet className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Life-Saving Impact</h3>
                <p className="text-gray-600">
                  Each donation can save up to three lives
                </p>
              </div>

              <div className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4 mx-auto">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community Participation</h3>
                <p className="text-gray-600">
                  Bringing together volunteers for a noble cause
                </p>
              </div>

              <div className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4 mx-auto">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Safe & Professional</h3>
                <p className="text-gray-600">
                  Conducted by trained medical professionals
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Donate Blood?</h2>
              <div className="bg-red-50 rounded-xl p-8 mb-12">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Blood cannot be manufactured – it can only come from voluntary donors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Every two seconds, someone needs blood</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>One donation can help save up to three lives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Blood is needed for surgeries, cancer treatment, chronic illnesses, and traumatic injuries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Donating blood is safe, simple, and saves lives</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Blood Donation Drives</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                We organize regular blood donation camps in various locations, making it convenient 
                for people to donate blood and contribute to saving lives. Our camps are conducted 
                with the highest safety standards and in collaboration with licensed blood banks.
              </p>

              <div className="card bg-gradient-to-r from-red-600 to-red-700 text-white">
                <h3 className="text-2xl font-bold mb-4">Impact Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">2,000+</div>
                    <div className="text-red-100">Units Collected</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">30+</div>
                    <div className="text-red-100">Camps Organized</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">6,000+</div>
                    <div className="text-red-100">Lives Impacted</div>
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

export default BloodCamps;
