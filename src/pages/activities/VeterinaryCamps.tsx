import { Syringe } from 'lucide-react';

const VeterinaryCamps = () => {
  return (
    <div>
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Veterinary Camps</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Healthcare services for animals and livestock in rural communities
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Recognizing that animals play a crucial role in the livelihoods of rural communities, 
                our trust organizes veterinary camps to provide healthcare services for livestock and 
                domestic animals. These camps help farmers protect their animals and ensure their 
                well-being.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="card">
                  <Syringe className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Services Provided</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• General health check-ups for animals</li>
                    <li>• Vaccination and deworming</li>
                    <li>• Treatment for common diseases</li>
                    <li>• First aid for injuries</li>
                    <li>• Nutritional guidance for livestock</li>
                    <li>• Animal husbandry education</li>
                    <li>• Free medicines distribution</li>
                  </ul>
                </div>

                <div className="card bg-green-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why It Matters</h3>
                  <p className="text-gray-700 mb-4">
                    For many rural families, livestock is not just property but a source of livelihood. 
                    Healthy animals mean:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Better milk and meat production</li>
                    <li>• Increased farm productivity</li>
                    <li>• Improved family income</li>
                    <li>• Reduced economic losses from animal diseases</li>
                    <li>• Overall community well-being</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                We work with qualified veterinarians and animal health professionals to provide 
                comprehensive care. Our camps are conducted in rural areas where access to veterinary 
                services is limited. We also provide education on animal care and disease prevention 
                to help farmers maintain the health of their livestock.
              </p>

              <div className="bg-green-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact on Communities</h3>
                <p className="text-gray-700 mb-6">
                  Our veterinary camps have helped numerous farmers save their livestock from diseases, 
                  preventing significant economic losses. The preventive care and education provided 
                  through these camps have contributed to better animal health management in rural areas.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">1,000+</div>
                    <div className="text-gray-600">Animals Treated</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                    <div className="text-gray-600">Camps Conducted</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                    <div className="text-gray-600">Farmers Helped</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">30+</div>
                    <div className="text-gray-600">Villages Covered</div>
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

export default VeterinaryCamps;
