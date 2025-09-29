import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Sponsors Section */}
      <div className="py-12 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-xl font-semibold mb-8 text-gray-300">
            برعاية ودعم من
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                <span className="text-xs font-bold">SDAIA</span>
              </div>
              <p className="text-sm text-gray-400">الهيئة السعودية للبيانات والذكاء الاصطناعي</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                <span className="text-xs font-bold">2030</span>
              </div>
              <p className="text-sm text-gray-400">رؤية ٢٠٣٠</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                <span className="text-xs font-bold">MOJ</span>
              </div>
              <p className="text-sm text-gray-400">وزارة العدل</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; ٢٠٢٥ منصة بصيرة. جميع الحقوق محفوظة. | المملكة العربية السعودية</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;