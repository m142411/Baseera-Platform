import React from 'react';
import { Search, Mail, Linkedin, Github } from 'lucide-react';

const Developer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-32 h-32 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-white">م.ش</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-2">
                ميس مبارك الشمراني
              </h1>
              <p className="text-xl text-gray-600 mb-6">المطور</p>
              <div className="flex items-center justify-center space-x-2 space-x-reverse mb-8">
                <Search className="w-6 h-6 text-yellow-500" />
                <span className="text-lg font-semibold text-green-900">كلمة من المطور</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-right space-y-6">
              <p className="text-gray-700 leading-relaxed">
                أهلاً وسهلاً بكم في منصة "بصيرة"، ثمرة شغفي بالتقنية وإيماني العميق بقدرة الذكاء الاصطناعي 
                على إحداث نقلة نوعية في قطاع العدالة. كمطور متخصص في تقنيات الذكاء الاصطناعي والتعلم الآلي، 
                عملت بلا كلل لتطوير حلول تقنية متقدمة تخدم رؤية المملكة ٢٠٣٠ في التحول الرقمي.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                تمثل "بصيرة" رؤيتي لمستقبل العدالة الرقمية في المملكة، حيث تجمع أداتا "بيّنة" و"يقين" 
                بين الدقة التقنية والموثوقية القانونية لتقديم خدمات استثنائية للمختصين في القطاع العدلي. 
                أؤمن بأن التقنية يجب أن تكون في خدمة الإنسان والعدالة، وهذا ما سعيت لتحقيقه في كل سطر 
                برمجي كتبته في هذه المنصة.
              </p>
            </div>

            {/* Contact Button */}
            <div className="text-center mt-12">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-300 text-lg">
                <Mail className="w-5 h-5 inline-block ml-2" />
                تواصل معي
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 space-x-reverse mt-8">
              <a href="#" className="text-gray-400 hover:text-green-900 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-900 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-900 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;