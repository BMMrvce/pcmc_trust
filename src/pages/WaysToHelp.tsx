import { Link } from 'react-router-dom';
import { Heart, Users, Share2, ArrowRight } from 'lucide-react';

const WaysToHelp = () => {
  return (
    <div>
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Ways to Help</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Join us in making a difference - every contribution counts
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Be a Part of the Change
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              There are many ways you can support our mission and help us create a positive impact 
              in the lives of those in need. Whether through donations, volunteering your time, or 
              spreading awareness, your contribution makes a real difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Link to="/ways-to-help/donate" className="card group hover:border-primary-300 border-2 border-transparent text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Heart className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Donate</h3>
              <p className="text-gray-600 mb-6">
                Your financial contribution helps us continue our programs and reach more people in need. 
                All donations are tax-deductible under 80G.
              </p>
              <span className="inline-flex items-center text-primary-600 font-semibold">
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Link>

            <Link to="/ways-to-help/volunteer" className="card group hover:border-secondary-300 border-2 border-transparent text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-100 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Dedicate your time and skills to help organize camps, support programs, and directly 
                assist beneficiaries in various capacities.
              </p>
              <span className="inline-flex items-center text-secondary-600 font-semibold">
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Link>

            <Link to="/ways-to-help/spread-the-word" className="card group hover:border-orange-300 border-2 border-transparent text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Share2 className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Spread the Word</h3>
              <p className="text-gray-600 mb-6">
                Help us reach more people by sharing our mission, programs, and impact with your 
                network and community.
              </p>
              <span className="inline-flex items-center text-orange-600 font-semibold">
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Link>
          </div>

          {/* Impact Statement */}
          <div className="bg-gradient-to-r from-primary-700 to-primary-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Together, We Can Do More</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Every contribution, whether financial, time, or spreading awareness, plays a crucial 
              role in helping us serve more people and create lasting positive change in communities.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-primary-100">Lives Touched</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-primary-100">Programs</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-primary-100">Volunteers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-primary-100">Communities</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaysToHelp;
