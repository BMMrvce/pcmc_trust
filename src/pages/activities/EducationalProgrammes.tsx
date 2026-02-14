import { BookOpen, GraduationCap, Users } from 'lucide-react';

const EducationalProgrammes = () => {
  return (
    <div>
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Educational Programmes</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering communities through education and skill development
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Education is the foundation for personal growth and community development. Our educational 
              programmes aim to provide equal opportunities for learning and skill development to 
              underprivileged children and youth.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 mx-auto">
                  <BookOpen className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scholarships</h3>
                <p className="text-gray-600">
                  Financial support for deserving students
                </p>
              </div>

              <div className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 mx-auto">
                  <GraduationCap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">School Supplies</h3>
                <p className="text-gray-600">
                  Books, uniforms, and educational materials
                </p>
              </div>

              <div className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 mx-auto">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Skill Training</h3>
                <p className="text-gray-600">
                  Vocational training for employability
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Educational Initiatives</h2>
              
              <div className="card mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scholarship Program</h3>
                <p className="text-gray-700 mb-4">
                  We provide scholarships to meritorious students from economically disadvantaged 
                  backgrounds to help them continue their education without financial constraints.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Merit-based scholarships for higher education</li>
                  <li>• Need-based financial assistance</li>
                  <li>• Support for professional courses</li>
                  <li>• Hostel and living expense support</li>
                </ul>
              </div>

              <div className="card mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">School Support Program</h3>
                <p className="text-gray-700 mb-4">
                  Distribution of essential school supplies to ensure that lack of resources doesn't 
                  hinder a child's education.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• School bags and stationery</li>
                  <li>• Textbooks and notebooks</li>
                  <li>• School uniforms</li>
                  <li>• Digital learning devices</li>
                </ul>
              </div>

              <div className="card mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Skill Development</h3>
                <p className="text-gray-700 mb-4">
                  Vocational training programs to enhance employability and help youth become 
                  self-reliant.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Computer literacy training</li>
                  <li>• Vocational skill courses</li>
                  <li>• Career counseling and guidance</li>
                  <li>• Placement assistance</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                    <div className="text-gray-600">Students Supported</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                    <div className="text-gray-600">Scholarships Awarded</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                    <div className="text-gray-600">Schools Supported</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">200+</div>
                    <div className="text-gray-600">Youth Trained</div>
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

export default EducationalProgrammes;
