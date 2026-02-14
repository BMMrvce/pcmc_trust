import { Target, Eye, Heart, Lightbulb } from 'lucide-react';

const Mission = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Our Mission</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Guided by compassion, driven by service, committed to positive change
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card scroll-reveal mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-800 leading-relaxed text-center max-w-3xl mx-auto">
                To serve the underprivileged and marginalized sections of society by providing 
                essential services in healthcare, education, and social welfare, without any 
                discrimination based on caste, religion, or social status. We aim to instill 
                values of compassion, respect for elders, and social responsibility in the 
                younger generation while actively working towards community upliftment.
              </p>
            </div>

            {/* Vision & Values Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card scroll-reveal">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-4">
                  <Eye className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  A society where every individual has access to basic healthcare, quality education, 
                  and opportunities for growth, regardless of their economic or social background. 
                  We envision communities where traditional values of compassion and service coexist 
                  with modern development.
                </p>
              </div>

              <div className="card scroll-reveal">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-4">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Compassion and empathy for all</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Equality and non-discrimination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Transparency and integrity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Respect for tradition and culture</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Core Objectives */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Target className="w-8 h-8 text-orange-600 mr-3" />
                Core Objectives
              </h2>

              <div className="space-y-8">
                <div className="card scroll-reveal border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare for All</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Organize regular medical camps, eye care programs, dental camps, and blood donation 
                    drives to provide essential healthcare services to underserved communities. Partner 
                    with qualified medical professionals and institutions to ensure quality care.
                  </p>
                </div>

                <div className="card scroll-reveal border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Empowerment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Support educational initiatives by providing scholarships, school supplies, and 
                    learning resources to underprivileged children. Promote literacy and skill 
                    development programs to enhance employability and self-reliance.
                  </p>
                </div>

                <div className="card scroll-reveal border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Social Welfare</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Conduct cultural programs, awareness campaigns, and community development activities 
                    to promote social harmony, environmental consciousness, and overall well-being. 
                    Address social issues and work towards building stronger, more inclusive communities.
                  </p>
                </div>

                <div className="card scroll-reveal border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Value-Based Living</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Inspire young people with the ideals of Shravan Kumar – respect for parents and 
                    elders, compassion for all living beings, and dedication to service. Promote 
                    traditional values while embracing progress and development.
                  </p>
                </div>
              </div>

              <div className="card scroll-reveal mt-12 border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-12 h-12 flex-shrink-0 text-orange-600" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Commitment</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We are committed to maintaining the highest standards of service delivery and 
                      ensuring that every program we undertake creates meaningful and lasting impact. 
                      Our work is guided by the principle that service to humanity is the highest form 
                      of worship, and we strive to live up to this ideal in everything we do.
                    </p>
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

export default Mission;
