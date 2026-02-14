import { Calendar, TrendingUp, Users } from 'lucide-react';

const HowItEvolved = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">How It Evolved</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            The journey of PCMC Trust from its inception to becoming a beacon of hope
          </p>
        </div>
      </section>

      {/* Timeline Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card scroll-reveal prose prose-lg max-w-none">
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                The Parvathamma Channajamma Memorial Charitable Trust was born from a deep sense of 
                gratitude and a desire to give back to society. Inspired by the values and teachings 
                of Mrs. Channajamma, her children decided to establish this trust to continue her 
                legacy of compassion and service.
              </p>

              {/* Timeline */}
              <div className="space-y-12 my-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Foundation</h3>
                    <p className="text-gray-700 leading-relaxed">
                      The trust was established with a clear vision: to serve the underprivileged 
                      and marginalized sections of society. Following the principles taught by 
                      Shravan Kumar about devotion to parents and elders, the trust aimed to 
                      instill these values in the younger generation while providing essential 
                      services to those in need.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Growth and Expansion</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Starting with small-scale health camps and educational programs, the trust 
                      gradually expanded its reach. Over the years, we have organized numerous 
                      medical camps, eye care programs, blood donation drives, and educational 
                      initiatives. Each program was designed to address specific needs of the 
                      community, ensuring maximum impact.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Community Impact</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Today, PCMC Trust has touched the lives of thousands of people across various 
                      communities. Our programs have provided medical care to those who couldn't 
                      afford it, restored vision to hundreds through eye camps, supported education 
                      for underprivileged children, and created awareness about important social and 
                      health issues.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Evolution</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                What began as a small initiative has grown into a comprehensive social welfare 
                organization. Our evolution reflects our commitment to adapting to the changing 
                needs of society while staying true to our core values:
              </p>
              
              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Expanded from basic health camps to specialized medical programs including dental, eye care, and veterinary services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Developed partnerships with leading hospitals and educational institutions to enhance service delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Introduced cultural and awareness programs to promote social harmony and environmental consciousness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Built a network of dedicated volunteers who share our vision and values</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Maintained transparency and accountability in all our operations, earning the trust of donors and beneficiaries alike</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Looking Forward</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As we continue to evolve, our focus remains on creating sustainable impact. We are 
                constantly exploring new ways to serve our community better, leveraging technology 
                and partnerships to reach more people in need. Our journey is far from over – it is 
                an ongoing commitment to serve humanity with compassion and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItEvolved;
