import { Share2, Facebook, Twitter, Instagram, Mail, MessageCircle } from 'lucide-react';

const SpreadTheWord = () => {
  return (
    <div>
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Spread the Word</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Help us reach more people by sharing our mission and impact
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              One of the most valuable ways you can support PCMC Trust is by spreading awareness about 
              our work. By sharing our mission, programs, and impact stories with your network, you help 
              us reach more people who need our services and more people who want to contribute to our cause.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="card text-center">
                <Facebook className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media</h3>
                <p className="text-gray-600 mb-4">
                  Share our posts and updates on Facebook, Twitter, and Instagram
                </p>
                <button className="text-blue-600 font-semibold hover:underline">
                  Follow Us →
                </button>
              </div>

              <div className="card text-center">
                <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Email Networks</h3>
                <p className="text-gray-600 mb-4">
                  Forward our newsletter and updates to friends, family, and colleagues
                </p>
                <button className="text-green-600 font-semibold hover:underline">
                  Subscribe →
                </button>
              </div>

              <div className="card text-center">
                <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Word of Mouth</h3>
                <p className="text-gray-600 mb-4">
                  Talk about our work with people in your community and social circles
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How You Can Help Spread Awareness</h2>

              <div className="space-y-6 mb-12">
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Share on Social Media</h3>
                  <p className="text-gray-700 mb-4">
                    Follow us on social media platforms and share our posts about programs, events, 
                    and impact stories. Use relevant hashtags to reach a wider audience:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-800 font-mono">
                      #PCMCTrust #CharityIndia #NGOIndia #SocialService #CommunityService
                    </p>
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Tell Your Story</h3>
                  <p className="text-gray-700 mb-4">
                    If you've volunteered with us, received our services, or witnessed our work, 
                    share your experience with others. Personal stories have a powerful impact.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Organize Awareness Events</h3>
                  <p className="text-gray-700 mb-4">
                    Host information sessions at your workplace, school, or community center to 
                    educate people about our mission and programs. We can provide materials and support.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Connect Us with Others</h3>
                  <p className="text-gray-700 mb-4">
                    Introduce us to potential donors, volunteers, partners, or beneficiaries who 
                    might benefit from or contribute to our work.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Media Outreach</h3>
                  <p className="text-gray-700 mb-4">
                    If you have connections with media outlets, help us get coverage for our programs 
                    and impact stories to reach a larger audience.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Awareness Matters</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Helps us reach more beneficiaries who need our services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Attracts potential volunteers and supporters to join our cause</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Increases donations that enable us to expand our programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Builds partnerships with other organizations and institutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Creates larger community awareness about social issues we address</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                <div className="flex items-start gap-4">
                  <Share2 className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Your Voice Matters</h3>
                    <p className="text-orange-100 leading-relaxed mb-6">
                      By spreading the word about PCMC Trust, you become an ambassador for our cause. 
                      Your recommendation and endorsement carry weight and can inspire others to get 
                      involved. Together, we can amplify our impact and reach more people in need.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a href="#" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur px-6 py-2 rounded-lg transition-colors">
                        <Facebook className="w-5 h-5" />
                        <span>Facebook</span>
                      </a>
                      <a href="#" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur px-6 py-2 rounded-lg transition-colors">
                        <Twitter className="w-5 h-5" />
                        <span>Twitter</span>
                      </a>
                      <a href="#" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur px-6 py-2 rounded-lg transition-colors">
                        <Instagram className="w-5 h-5" />
                        <span>Instagram</span>
                      </a>
                    </div>
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

export default SpreadTheWord;
