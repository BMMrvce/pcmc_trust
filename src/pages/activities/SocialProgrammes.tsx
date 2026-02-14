import { Users, Music, Gift } from 'lucide-react';

const SocialProgrammes = () => {
  return (
    <div>
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Social Programmes</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Building stronger communities through cultural and social initiatives
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Our social programmes are designed to promote cultural values, social harmony, and 
              community bonding. We organize various cultural events, welfare programs, and community 
              development activities that bring people together and celebrate our rich heritage.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 mx-auto">
                  <Music className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Programs</h3>
                <p className="text-gray-600">
                  Celebrating traditions and cultural heritage
                </p>
              </div>

              <div className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community Events</h3>
                <p className="text-gray-600">
                  Bringing people together for social causes
                </p>
              </div>

              <div className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 mx-auto">
                  <Gift className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welfare Programs</h3>
                <p className="text-gray-600">
                  Support for the elderly and needy
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Social Initiatives</h2>

              <div className="space-y-8 mb-12">
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cultural Events</h3>
                  <p className="text-gray-700 mb-4">
                    We organize cultural programs that celebrate our rich heritage and promote traditional 
                    values. These events bring communities together and provide a platform for cultural expression.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Notable Events:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>"Geeta Gayana" Award Program:</strong> Organized by PCMC Trust on 26th Jan 2019, 
                      performed by Panchama Music Troupe</li>
                      <li>• Traditional music and dance performances</li>
                      <li>• Festival celebrations with the community</li>
                      <li>• Recognition of local artists and cultural contributors</li>
                    </ul>
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Welfare Programs</h3>
                  <p className="text-gray-700 mb-4">
                    Support programs for vulnerable sections of society, including the elderly, 
                    differently-abled individuals, and economically disadvantaged families.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Distribution of essential supplies to needy families</li>
                    <li>• Support for the elderly and senior citizens</li>
                    <li>• Jaipur Foot/Leg distribution for differently-abled individuals</li>
                    <li>• Emergency financial assistance for families in crisis</li>
                  </ul>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Community Development</h3>
                  <p className="text-gray-700 mb-4">
                    Initiatives aimed at overall community development and social empowerment.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Women empowerment programs</li>
                    <li>• Youth development activities</li>
                    <li>• Senior citizen welfare programs</li>
                    <li>• Community infrastructure support</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
                <p className="text-gray-700 mb-6">
                  Through our social programmes, we have touched thousands of lives, bringing joy, 
                  preserving culture, and creating stronger, more inclusive communities.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                    <div className="text-gray-600">Events Organized</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">2,000+</div>
                    <div className="text-gray-600">Families Helped</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                    <div className="text-gray-600">Aids Distributed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">30+</div>
                    <div className="text-gray-600">Communities Served</div>
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

export default SocialProgrammes;
