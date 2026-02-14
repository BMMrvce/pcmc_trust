import { Link } from 'react-router-dom';
import { Users, Target, Scale, TrendingUp, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">About Us</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Learn about our history, mission, and the people behind PCMC Trust
          </p>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/about/who-we-are" className="card scroll-reveal group">
              <Users className="w-12 h-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Who We Are</h3>
              <p className="text-gray-600 mb-4">Learn about our organization and the team behind it</p>
              <span className="inline-flex items-center text-orange-600 font-semibold">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>

            <Link to="/about/how-it-evolved" className="card scroll-reveal group">
              <TrendingUp className="w-12 h-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">How it Evolved</h3>
              <p className="text-gray-600 mb-4">Discover our journey and growth over the years</p>
              <span className="inline-flex items-center text-orange-600 font-semibold">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>

            <Link to="/about/mission" className="card scroll-reveal group">
              <Target className="w-12 h-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mission</h3>
              <p className="text-gray-600 mb-4">Our vision and goals for community service</p>
              <span className="inline-flex items-center text-orange-600 font-semibold">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>

            <Link to="/about/legal-financial" className="card scroll-reveal group">
              <Scale className="w-12 h-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legal & Financial</h3>
              <p className="text-gray-600 mb-4">Transparency in our operations and finances</p>
              <span className="inline-flex items-center text-orange-600 font-semibold">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Parvathamma Channajamma Memorial Charitable Trust
            </h2>
            <div className="card scroll-reveal prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Parvathamma Channajamma Memorial Charitable Trust was established to honor the memory 
                and values of Mrs. Channajamma. Our trust is dedicated to serving humanity through various 
                social welfare activities, following the timeless principles of compassion and service.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Drawing inspiration from the legendary story of Shravan Kumar, who exemplified devotion 
                to parents, our trust emphasizes the importance of family values, compassion, and service 
                to society. We believe that the love and care shown by parents toward their children should 
                inspire us to extend the same compassion to all members of society.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our mission is to reach out to the underprivileged and marginalized sections of society, 
                providing them with essential services in healthcare, education, and social welfare. We 
                work tirelessly to ensure that no one is left behind, regardless of their caste, religion, 
                or social status.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
