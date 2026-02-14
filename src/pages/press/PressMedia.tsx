import { Newspaper, FileText } from 'lucide-react';

const PressMedia = () => {
  return (
    <div>
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">PCMC Trust in Media</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Media coverage and press mentions of our charitable activities
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Over the years, our programs and activities have been featured in various newspapers 
              and media outlets. Here are some highlights of our media coverage showcasing the 
              impact of our work in serving communities.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card text-center">
                <Newspaper className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Newspaper Coverage</h3>
                <p className="text-gray-600">
                  Our programs have been featured in leading local and regional newspapers
                </p>
              </div>

              <div className="card text-center">
                <FileText className="w-16 h-16 text-secondary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Press Releases</h3>
                <p className="text-gray-600">
                  Official announcements and updates about our major programs and initiatives
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Media Highlights</h2>

              <div className="space-y-6 mb-12">
                <div className="card">
                  <div className="flex items-start gap-4">
                    <Newspaper className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Eye Camp Coverage
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Local newspapers covered our eye camp at Chakanahalli, highlighting how we 
                        provided free eye care services to hundreds of rural residents in partnership 
                        with leading eye hospitals.
                      </p>
                      <div className="text-sm text-gray-500">
                        Featured in: Regional Kannada dailies
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start gap-4">
                    <Newspaper className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Jaipur Foot Distribution Program
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Media coverage of our Jaipur Foot distribution program on June 1, 2017, 
                        where we provided artificial limbs to differently-abled individuals, 
                        helping them lead more independent lives.
                      </p>
                      <div className="text-sm text-gray-500">
                        Covered by multiple local newspapers
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start gap-4">
                    <Newspaper className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Health Camp Features
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Several of our medical camps, including dental camps and general health 
                        check-ups, have been featured in local media, showcasing our commitment 
                        to providing free healthcare to underserved communities.
                      </p>
                      <div className="text-sm text-gray-500">
                        Regular coverage in community newspapers
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start gap-4">
                    <Newspaper className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Cultural Event Coverage
                      </h3>
                      <p className="text-gray-700 mb-2">
                        The "Geeta Gayana" Award Program organized by PCMC Trust received 
                        significant media attention, highlighting our efforts to preserve and 
                        promote traditional Indian classical music and cultural values.
                      </p>
                      <div className="text-sm text-gray-500">
                        January 26, 2019 - Multiple newspaper features
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start gap-4">
                    <Newspaper className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Blood Donation Drives
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Our blood donation camps have been regularly featured in local media, 
                        encouraging community participation and highlighting the importance of 
                        voluntary blood donation.
                      </p>
                      <div className="text-sm text-gray-500">
                        Ongoing coverage in various publications
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Media Contact</h3>
                <p className="text-gray-700 mb-6">
                  For press inquiries, interviews, or to feature our programs in your publication, 
                  please contact our media relations team:
                </p>
                <div className="bg-white rounded-lg p-6">
                  <p className="text-gray-700 mb-2">Phone: 94483-09227 / 91413-09227 / 9945056219</p>
                  <p className="text-gray-700 mb-2">Email: press@pcmctrust.org</p>
                  <p className="text-gray-700">We're happy to provide information, photographs, and interviews.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressMedia;
