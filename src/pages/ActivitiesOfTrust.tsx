import { Link } from 'react-router-dom';
import { Stethoscope, Eye, Heart, Syringe, BookOpen, Users, Activity, ArrowRight } from 'lucide-react';

const ActivitiesOfTrust = () => {
  return (
    <div>
      {/* Hero Section */}
        <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Activities of Trust</h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Serving the community through comprehensive healthcare, education, and social welfare programs
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Medical Programmes */}
            <Link to="/activities/medical-programmes" className="card group hover:border-primary-300 border-2 border-transparent">
              <Stethoscope className="w-12 h-12 text-primary-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Programmes</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive healthcare services including dental camps, general health camps, and medical helplines
              </p>
              <span className="inline-flex items-center text-primary-600 font-semibold">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>

            {/* Eye Camps */}
            <Link to="/activities/eye-camps" className="card group hover:border-primary-300 border-2 border-transparent">
              <Eye className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eye Camps</h3>
              <p className="text-gray-600 mb-4">
                Regular eye examination and treatment programs to restore vision and eye health
              </p>
              <span className="inline-flex items-center text-blue-600 font-semibold">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>

            {/* Blood Camps */}
            <Link to="/activities/blood-camps" className="card group hover:border-primary-300 border-2 border-transparent">
              <Heart className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Blood Camps</h3>
              <p className="text-gray-600 mb-4">
                Blood donation drives to save lives and maintain adequate blood supply
              </p>
              <span className="inline-flex items-center text-red-600 font-semibold">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>

            {/* Veterinary Camps */}
            <Link to="/activities/veterinary-camps" className="card group hover:border-primary-300 border-2 border-transparent">
              <Syringe className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Veterinary Camps</h3>
              <p className="text-gray-600 mb-4">
                Healthcare services for animals and livestock in rural communities
              </p>
              <span className="inline-flex items-center text-green-600 font-semibold">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>

            {/* Educational Programmes */}
            <Link to="/activities/educational-programmes" className="card group hover:border-primary-300 border-2 border-transparent">
              <BookOpen className="w-12 h-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Programmes</h3>
              <p className="text-gray-600 mb-4">
                Supporting education through scholarships and learning resources
              </p>
              <span className="inline-flex items-center text-orange-600 font-semibold">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>

            {/* Social Programmes */}
            <Link to="/activities/social-programmes" className="card group hover:border-primary-300 border-2 border-transparent">
              <Users className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Programmes</h3>
              <p className="text-gray-600 mb-4">
                Cultural programs and community development initiatives
              </p>
              <span className="inline-flex items-center text-purple-600 font-semibold">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>

            {/* Awareness Programmes */}
            <Link to="/activities/awareness-programmes" className="card group hover:border-primary-300 border-2 border-transparent">
              <Activity className="w-12 h-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Awareness Programmes</h3>
              <p className="text-gray-600 mb-4">
                Educational sessions on health, hygiene, and social issues
              </p>
              <span className="inline-flex items-center text-indigo-600 font-semibold">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>

            {/* Trust Camp Activities */}
            <Link to="/activities/trust-camp" className="card group hover:border-primary-300 border-2 border-transparent">
              <Activity className="w-12 h-12 text-teal-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trust Camp Activities</h3>
              <p className="text-gray-600 mb-4">
                Various camp activities organized by the trust for community welfare
              </p>
              <span className="inline-flex items-center text-teal-600 font-semibold">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Making a Real Impact</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Through our various programs and activities, we have been able to touch the lives of 
              thousands of people across different communities. Each program is designed with the 
              specific needs of our beneficiaries in mind, ensuring maximum impact and meaningful change.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">10,000+</div>
                <div className="text-gray-600">People Helped</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-gray-600">Health Camps</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">Eye Camps</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600">Students Supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivitiesOfTrust;
