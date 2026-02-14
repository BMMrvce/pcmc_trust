import { Phone, Clock, Heart, AlertCircle } from 'lucide-react';

const MedicalHelpline = () => {
  return (
    <div>
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Medical Helpline</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            24/7 medical advice and emergency assistance coordination
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Our medical helpline provides immediate medical advice and coordinates emergency 
              medical assistance for those in need. We connect people with qualified medical 
              professionals and help arrange necessary medical care.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 mx-auto">
                  <Phone className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Immediate Support</h3>
                <p className="text-gray-600">
                  Quick medical advice and guidance for health emergencies
                </p>
              </div>

              <div className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-4 mx-auto">
                  <Clock className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Availability</h3>
                <p className="text-gray-600">
                  Round-the-clock service for medical consultations and emergency coordination
                </p>
              </div>

              <div className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 mx-auto">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Care Coordination</h3>
                <p className="text-gray-600">
                  Helping arrange medical care and hospital admissions when needed
                </p>
              </div>
            </div>

         <div className="bg-orange-50 border-l-4 border-orange-600 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Important Note</h3>
                  <p className="text-gray-700">
                    While our medical helpline provides valuable guidance and support, in case of 
                    life-threatening emergencies, please call emergency services (108) immediately.
                  </p>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-r from-primary-600 to-primary-700 text-white">
              <h3 className="text-2xl font-bold mb-4">How to Reach Us</h3>
              <p className="text-primary-100 mb-6">
                For medical advice and emergency assistance coordination, contact our helpline:
              </p>
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur rounded-lg p-4">
                <Phone className="w-6 h-6" />
                <span className="text-xl font-bold">94483-09227 / 91413-09227 / 9945056219</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalHelpline;
