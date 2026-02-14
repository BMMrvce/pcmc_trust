import { Activity, Megaphone, Users } from 'lucide-react';

const AwarenessProgrammes = () => {
  return (
    <div>
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Awareness Programmes</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Educating communities on health, hygiene, and social issues
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Awareness is the first step towards positive change. Our awareness programmes are 
              designed to educate communities about important health, social, and environmental 
              issues, empowering them to make informed decisions and adopt better practices.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4 mx-auto">
                  <Activity className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Health Awareness</h3>
                <p className="text-gray-600">
                  Education on hygiene and preventive healthcare
                </p>
              </div>

              <div className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4 mx-auto">
                  <Megaphone className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Social Issues</h3>
                <p className="text-gray-600">
                  Campaigns on social challenges and solutions
                </p>
              </div>

              <div className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4 mx-auto">
                  <Users className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community Workshops</h3>
                <p className="text-gray-600">
                  Interactive sessions for skill building
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Awareness Initiatives</h2>

              <div className="space-y-8 mb-12">
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Health and Hygiene Awareness</h3>
                  <p className="text-gray-700 mb-4">
                    Educational sessions on maintaining good health and hygiene practices to prevent 
                    diseases and improve overall well-being.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Personal hygiene and sanitation</li>
                    <li>• Nutrition and balanced diet</li>
                    <li>• Preventive healthcare measures</li>
                    <li>• Importance of regular health check-ups</li>
                    <li>• Disease prevention and control</li>
                    <li>• Maternal and child health</li>
                  </ul>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Awareness</h3>
                  <p className="text-gray-700 mb-4">
                    Programs promoting environmental conservation and sustainable practices.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Waste management and recycling</li>
                    <li>• Water conservation</li>
                    <li>• Tree plantation drives</li>
                    <li>• Plastic-free initiatives</li>
                    <li>• Environmental protection</li>
                  </ul>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Social Awareness</h3>
                  <p className="text-gray-700 mb-4">
                    Campaigns addressing important social issues and promoting positive social change.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Women's rights and empowerment</li>
                    <li>• Child protection and education</li>
                    <li>• Elder care and respect</li>
                    <li>• Anti-discrimination campaigns</li>
                    <li>• Road safety awareness</li>
                    <li>• Financial literacy</li>
                  </ul>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Training and Workshops</h3>
                  <p className="text-gray-700 mb-4">
                    Interactive training sessions and workshops for skill development and knowledge sharing.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• First aid and emergency response training</li>
                    <li>• Life skills workshops for youth</li>
                    <li>• Vocational training programs</li>
                    <li>• Self-help group training</li>
                    <li>• Digital literacy sessions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact and Reach</h3>
                <p className="text-gray-700 mb-6">
                  Our awareness programmes have reached thousands of people across various communities, 
                  helping them adopt better practices and make informed decisions about their health, 
                  environment, and social well-being.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">5,000+</div>
                    <div className="text-gray-600">People Reached</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">100+</div>
                    <div className="text-gray-600">Sessions Conducted</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
                    <div className="text-gray-600">Training Programs</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">40+</div>
                    <div className="text-gray-600">Communities Covered</div>
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

export default AwarenessProgrammes;
