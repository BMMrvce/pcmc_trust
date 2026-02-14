import { Users, CheckCircle, Heart } from 'lucide-react';

const Volunteer = () => {
  return (
    <div>
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Volunteer with Us</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Make a difference with your time, skills, and passion for service
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Volunteering is one of the most rewarding ways to contribute to society. At PCMC Trust, 
              we welcome individuals who want to dedicate their time and skills to help those in need. 
              Our volunteers are the backbone of our organization, making our programs possible and 
              creating real impact in communities.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="card text-center">
                <CheckCircle className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Make an Impact</h3>
                <p className="text-gray-600">
                  Directly contribute to changing lives and communities
                </p>
              </div>

              <div className="card text-center">
                <Users className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Build Connections</h3>
                <p className="text-gray-600">
                  Meet like-minded people and build lasting relationships
                </p>
              </div>

              <div className="card text-center">
                <Heart className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Growth</h3>
                <p className="text-gray-600">
                  Develop new skills and gain valuable experience
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Volunteering Opportunities</h2>

              <div className="space-y-6 mb-12">
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Health Camp Support</h3>
                  <p className="text-gray-700 mb-4">
                    Assist in organizing and conducting medical camps, eye camps, dental camps, and 
                    blood donation drives. Help with registration, crowd management, and providing 
                    support to medical professionals.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Programs</h3>
                  <p className="text-gray-700 mb-4">
                    Support our educational initiatives by tutoring students, distributing school 
                    supplies, conducting workshops, or mentoring youth in skill development programs.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Event Management</h3>
                  <p className="text-gray-700 mb-4">
                    Help organize cultural programs, awareness campaigns, and community events. 
                    Opportunities include event planning, coordination, logistics, and execution.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Skills</h3>
                  <p className="text-gray-700 mb-4">
                    Contribute your professional expertise in areas like:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Medical/Healthcare professionals for camps</li>
                    <li>• IT support and digital services</li>
                    <li>• Marketing and communications</li>
                    <li>• Legal and financial advisory</li>
                    <li>• Photography and documentation</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Get Started</h2>
              <div className="bg-secondary-50 rounded-xl p-8 mb-8">
                <ol className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-secondary-600 text-white rounded-full font-bold mr-4 flex-shrink-0">1</span>
                    <div>
                      <strong>Contact Us:</strong> Reach out to us via phone or email to express your 
                      interest in volunteering
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-secondary-600 text-white rounded-full font-bold mr-4 flex-shrink-0">2</span>
                    <div>
                      <strong>Discuss Opportunities:</strong> We'll discuss various volunteering opportunities 
                      and find the best fit for your interests and skills
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-secondary-600 text-white rounded-full font-bold mr-4 flex-shrink-0">3</span>
                    <div>
                      <strong>Orientation:</strong> Receive orientation about our organization, programs, 
                      and volunteer guidelines
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-secondary-600 text-white rounded-full font-bold mr-4 flex-shrink-0">4</span>
                    <div>
                      <strong>Start Volunteering:</strong> Begin your journey with us and make a real 
                      difference in people's lives
                    </div>
                  </li>
                </ol>
              </div>

              <div className="card bg-gradient-to-r from-secondary-600 to-secondary-700 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
                <p className="text-secondary-100 mb-6">
                  Join our team of dedicated volunteers and be part of something meaningful. 
                  Whether you have a few hours a month or can commit more regularly, we value 
                  every contribution.
                </p>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <p className="mb-2"><strong>Contact:</strong></p>
                  <p>Phone: 94483-09227 / 91413-09227 / 9945056219</p>
                  <p>Email: contact@pcmctrust.org, gopal@pcmctrust.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
