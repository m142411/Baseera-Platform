import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-green-900 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          
          <div className="order-2 lg:order-1 text-center lg:text-right">
            <div className="space-y-6">
              <div className="order-2 lg:order-1 flex flex-col justify-center text-right">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
    رؤية طموحة لوطن يزدهر
  </h1>
</div>
              <p className="text-lg sm:text-xl leading-relaxed">
                إلى قائد رؤيتنا الملهمة، صاحب السمو الملكي الأمير محمد بن سلمان
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-200">
                نفخر بتقديم 'بصيرة'، ثمرة من ثمار دعمكم اللامحدود للابتكار والتحول الرقمي، 
                لتكون عوناً للعدالة ومنارة للحق في وطننا العظيم.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/image/M (1).png"
                    alt="قيادة حكيمة"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-yellow-400/20 to-transparent rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;