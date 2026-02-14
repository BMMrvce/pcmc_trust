import { Users, Heart, Award } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Who We Are</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            A dedicated team working towards social welfare and community development
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card scroll-reveal prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Parvathamma Channajamma Memorial Charitable Trust is a registered charitable organization 
                committed to serving the marginalized and underprivileged sections of society. Named in 
                memory of Mrs. Channajamma, our trust embodies her values of compassion, service, and 
                dedication to community welfare.
              </p>
              
                <div className="grid md:grid-cols-3 gap-8 my-12">
                <div className="text-center card scroll-reveal">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Community Focused</h3>
                  <p className="text-gray-600">
                    Dedicated to serving all sections of society without discrimination
                  </p>
                </div>
                
                <div className="text-center card scroll-reveal">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                    <Heart className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Compassionate</h3>
                  <p className="text-gray-600">
                    Guided by empathy and genuine care for those in need
                  </p>
                </div>
                
                <div className="text-center card scroll-reveal">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                    <Award className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Committed</h3>
                  <p className="text-gray-600">
                    Steadfast in our mission to create positive social impact
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our trust is managed by a dedicated team of trustees and volunteers who share a common 
                vision of social service. Led by the children of Mrs. Channajamma, who have carried 
                forward her legacy of compassion and service, our team works tirelessly to ensure that 
                our programs reach those who need them most.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Approach</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We believe in a holistic approach to community development, addressing multiple aspects 
                of well-being including:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Healthcare:</strong> Providing essential medical services, eye care, dental care, and health education</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Education:</strong> Supporting educational initiatives and providing resources for underprivileged children</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Social Welfare:</strong> Organizing cultural programs, awareness campaigns, and community development activities</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Economic Support:</strong> Providing financial assistance and resources to help families become self-reliant</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Values</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At the heart of our organization are the timeless values that guide all our actions:
              </p>
              <div className="bg-gray-50 rounded-xl p-8 mb-6">
                <ul className="space-y-4 text-gray-800">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Compassion:</strong> Treating every individual with empathy and kindness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Equality:</strong> Serving all people regardless of caste, religion, or social status</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Integrity:</strong> Maintaining transparency and accountability in all our operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Service:</strong> Dedicating ourselves to the welfare of society</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
