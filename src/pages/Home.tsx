import { Link } from 'react-router-dom';
import { Heart, Users, Activity, Eye, BookOpen, Stethoscope, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative py-[4.5rem] md:py-[7rem] overflow-hidden">
        <div className="hero-slideshow" aria-hidden="true">
          <span
            className="hero-slide"
            style={{ backgroundImage: "url('/wp-content/gallery/dental-camp/img_6965.jpg')" }}
          />
          <span
            className="hero-slide"
            style={{ backgroundImage: "url('/wp-content/gallery/donate-computers/dsc_0304.jpg')" }}
          />
          <span
            className="hero-slide"
            style={{ backgroundImage: "url('/wp-content/gallery/youth-awareness-9th-jan-11/img_3928.jpg')" }}
          />
          <span
            className="hero-slide"
            style={{ backgroundImage: "url('/wp-content/gallery/11-nov-10-cholanakana-halli-ec/img_6295.jpg')" }}
          />
        </div>
        <div className="hero-floating" aria-hidden="true">
          <img
            src="/wp-content/gallery/dental-camp/img_7006.jpg"
            alt=""
            className="hero-float hero-float-1"
          />
          <img
            src="/wp-content/gallery/donate-computers/dsc_0306.jpg"
            alt=""
            className="hero-float hero-float-2"
          />
          <img
            src="/wp-content/gallery/youth-awareness-9th-jan-11/img_3929.jpg"
            alt=""
            className="hero-float hero-float-3"
          />
        </div>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="hero-eyebrow hero-fade-up-1">PCMC Trust</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight text-gray-900 hero-fade-up-2">
              Your support is strength
              <span className="block">& power for someone.</span>
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed max-w-2xl mx-auto hero-fade-up-3">
              Welcome to PCMC Trust - your one-stop destination for finding and joining NGO campaigns to serve humanity through healthcare, education, and social welfare programs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-fade-up-4">
              <Link to="/ways-to-help/donate" className="btn-primary">
                Get Started
              </Link>
              <Link to="/photo-gallery" className="btn-secondary">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">10,000+</div>
              <div className="text-gray-600 font-medium">People Helped</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Activity className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
              <div className="text-gray-600 font-medium">Health Camps</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Eye className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-gray-600 font-medium">Eye Camps</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <BookOpen className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-gray-600 font-medium">Students Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                About Our Mission
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Mother protects the child safely in her womb, gives birth, feeds the nectar of milk, 
                  and dedicates her everything to the child's prosperity as a guide, teacher, and friend. 
                  Both father and mother see their happiness in the child's joy.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Following the ideals of Shravan Kumar from history, who taught that the love, 
                  affection, and care of parents is greater than earth and sky, the children of 
                  Mrs. Channajamma have been following these principles.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The stand of <strong className="text-gray-900">"Parvathamma Channajamma Memorial Charitable Trust"</strong> is to 
                  touch young people with the aspect that children should grow up as compassionate towards 
                  their parents and respond to the troubles and happiness of the common people by undertaking 
                  economic, educational, religious, medical and social activities for the helpless community 
                  without caste and religious discrimination.
                </p>
              </div>
              <Link to="/about" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold group">
                Read More About Us 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-sm mx-auto">
                <img 
                  src="/wp-content/uploads/2011/02/pcmc-logo.jpg" 
                  alt="PCMC Trust Logo" 
                  className="w-full rounded-xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We organize various programs to serve the community in healthcare, education, and social welfare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Medical Programmes */}
            <Link to="/activities/medical-programmes" className="card group hover:shadow-lg">
              <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-xl mb-4">
                <Stethoscope className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                Medical Programmes
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive healthcare services including dental camps, general health camps, and medical helplines for communities in need.
              </p>
              <span className="inline-flex items-center text-orange-600 font-semibold group">
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Eye Camps */}
            <Link to="/activities/eye-camps" className="card group hover:shadow-lg">
              <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-xl mb-4">
                <Eye className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                Eye Camps
              </h3>
              <p className="text-gray-600 mb-4">
                Regular eye examination camps and treatment programs in association with leading eye hospitals to restore vision.
              </p>
              <span className="inline-flex items-center text-orange-600 font-semibold group">
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Educational Programmes */}
            <Link to="/activities/educational-programmes" className="card group hover:shadow-lg">
              <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-xl mb-4">
                <BookOpen className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                Educational Programmes
              </h3>
              <p className="text-gray-600 mb-4">
                Supporting education through scholarships, school supplies, and educational initiatives for underprivileged children.
              </p>
              <span className="inline-flex items-center text-orange-600 font-semibold group">
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Blood Camps */}
            <Link to="/activities/blood-camps" className="card group hover:shadow-lg">
              <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-xl mb-4">
                <Heart className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                Blood Donation Camps
              </h3>
              <p className="text-gray-600 mb-4">
                Organizing blood donation drives to save lives and maintain adequate blood supply for emergency situations.
              </p>
              <span className="inline-flex items-center text-orange-600 font-semibold group">
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Social Programmes */}
            <Link to="/activities/social-programmes" className="card group hover:shadow-lg">
              <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-xl mb-4">
                <Users className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                Social Programmes
              </h3>
              <p className="text-gray-600 mb-4">
                Community development initiatives, cultural programs, and social welfare activities for overall societal upliftment.
              </p>
              <span className="inline-flex items-center text-orange-600 font-semibold group">
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Awareness Programmes */}
            <Link to="/activities/awareness-programmes" className="card group hover:shadow-lg">
              <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-xl mb-4">
                <Activity className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                Awareness Programmes
              </h3>
              <p className="text-gray-600 mb-4">
                Educational sessions and workshops on health, hygiene, environmental conservation, and social issues.
              </p>
              <span className="inline-flex items-center text-orange-600 font-semibold group">
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Donation CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">Make a Difference Today</h2>
              <p className="text-lg md:text-xl text-white/90">
                Your contribution can change lives. Support our mission to serve the community through healthcare, education, and social welfare.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Online Donations</h3>
              <p className="text-gray-700 mb-6">
                You can now make online donations to PCMC Trust. All donations are deductible under 80G of Income Tax.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="font-semibold text-gray-900 mb-3">Bank Details:</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Bank Name:</strong> Bank of Maharashtra</p>
                  <p><strong>Branch:</strong> Basavanagudi Branch, Bangalore – 560 004</p>
                  <p><strong>Account No:</strong> 60032598288</p>
                  <p><strong>MICR No:</strong> 560014003</p>
                </div>
              </div>
              <div className="text-center">
                <Link to="/ways-to-help/donate" className="btn-primary">
                  View Donation Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
