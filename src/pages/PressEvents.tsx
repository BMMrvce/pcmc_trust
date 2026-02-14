import { Link } from 'react-router-dom';
import { Newspaper, ArrowRight } from 'lucide-react';

const PressEvents = () => {
  return (
    <div>
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Press & Events</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Media coverage and highlights of our programs and activities
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-12">
              Stay updated with our latest events, media coverage, and press releases. Learn about 
              our ongoing programs and the positive impact we're creating in communities.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Link to="/press-events/media" className="card group hover:border-primary-300 border-2 border-transparent">
                <Newspaper className="w-12 h-12 text-primary-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">PCMC Trust in Media</h3>
                <p className="text-gray-600 mb-4">
                  View our media coverage, press releases, and features in newspapers and publications
                </p>
                <span className="inline-flex items-center text-primary-600 font-semibold">
                  View Coverage <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Link>

              <div className="card">
                <Newspaper className="w-12 h-12 text-secondary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Recent Events</h3>
                <p className="text-gray-600 mb-4">
                  Information about our recently conducted programs and upcoming events
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Recent Highlights</h2>
              
              <div className="space-y-6 mb-12">
                <div className="card">
                  <div className="text-sm text-gray-500 mb-2">January 26, 2019</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    "Geeta Gayana" Award Program
                  </h3>
                  <p className="text-gray-700">
                    PCMC Trust organized a prestigious award program featuring performance by 
                    Panchama Music Troupe, celebrating cultural excellence and traditional values. 
                    The event brought together community members and recognized outstanding 
                    contributions to Indian classical music.
                  </p>
                </div>

                <div className="card">
                  <div className="text-sm text-gray-500 mb-2">June 1, 2017</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Jaipur Foot/Leg Distribution Program
                  </h3>
                  <p className="text-gray-700">
                    Distribution of Jaipur Foot artificial limbs to differently-abled individuals, 
                    helping them regain mobility and independence. The program provided free 
                    prosthetics and mobility aids to deserving beneficiaries.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Eye Camp at Chakanahalli
                  </h3>
                  <p className="text-gray-700">
                    A successful eye camp organized in Chakanahalli village, providing free eye 
                    examinations, treatments, and surgeries to hundreds of rural residents. 
                    Many patients received cataract surgeries and free spectacles.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Eye Camp at Satnur
                  </h3>
                  <p className="text-gray-700">
                    In association with Sankara Eye Hospital Bangalore, conducted comprehensive 
                    eye care services including examinations, treatments, and surgical interventions 
                    for the local community.
                  </p>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Media Inquiries</h3>
                <p className="text-gray-700 mb-6">
                  Members of the press and media are welcome to contact us for information about 
                  our programs, impact stories, or to schedule interviews with our team.
                </p>
                <div className="bg-white rounded-lg p-6">
                  <p className="text-gray-800 mb-2"><strong>Press Contact:</strong></p>
                  <p className="text-gray-700">Phone: 94483-09227 / 91413-09227 / 9945056219</p>
                  <p className="text-gray-700">Email: press@pcmctrust.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressEvents;
