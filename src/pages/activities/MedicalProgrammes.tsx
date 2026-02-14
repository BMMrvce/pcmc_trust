import { Stethoscope, Smile, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const MedicalProgrammes = () => {
  return (
    <div>
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Medical Programmes</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Providing comprehensive healthcare services to underserved communities
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our medical programmes are designed to bring quality healthcare services to communities 
              that lack access to proper medical facilities. We organize regular health camps and 
              provide ongoing support through our medical helpline.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/activities/dental-camp" className="card group hover:border-primary-300 border-2 border-transparent">
              <Smile className="w-12 h-12 text-primary-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dental Camp</h3>
              <p className="text-gray-600">
                Free dental check-ups, treatments, and awareness about oral hygiene
              </p>
            </Link>

            <Link to="/activities/general-health-camp" className="card group hover:border-primary-300 border-2 border-transparent">
              <Stethoscope className="w-12 h-12 text-secondary-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">General Health Camp</h3>
              <p className="text-gray-600">
                Comprehensive health check-ups and basic medical treatments
              </p>
            </Link>

            <Link to="/activities/medical-helpline" className="card group hover:border-primary-300 border-2 border-transparent">
              <Phone className="w-12 h-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Helpline</h3>
              <p className="text-gray-600">
                24/7 medical advice and emergency assistance coordination
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalProgrammes;
