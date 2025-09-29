import React from 'react';
import { Shield, Users, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      title: 'الأمان والموثوقية',
      description: 'أعلى معايير الأمان السيبراني لحماية البيانات الحساسة'
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: 'خدمة المتخصصين',
      description: 'مصممة خصيصاً للمختصين في القطاع العدلي والقانوني'
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-500" />,
      title: 'الدقة والكفاءة',
      description: 'تقنيات متطورة تضمن أعلى مستويات الدقة في النتائج'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: 'معايير عالمية',
      description: 'مطابقة لأفضل الممارسات والمعايير الدولية'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            ما هي بصيرة؟
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Main Description */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none text-right space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong>بصيرة</strong> هي منصة وطنية رائدة تجمع بين أحدث تقنيات الذكاء الاصطناعي وخبرة المتخصصين في القطاع العدلي، 
              لتقديم حلول ذكية ومتطورة تدعم العدالة الرقمية في المملكة العربية السعودية.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              تأتي المنصة استجابة لتوجيهات رؤية المملكة ٢٠٣٠ في التحول الرقمي، وتحقيقاً لهدف تطوير قطاع العدالة 
              باستخدام أفضل التقنيات المتاحة. تضم بصيرة أداتين رئيسيتين: <strong>"بيّنة"</strong> للتحقق من الأدلة الرقمية، 
              و<strong>"يقين"</strong> كمستشار قانوني ذكي متخصص في القانون السعودي.
            </p>

            <p className="text-gray-700 leading-relaxed">
              نؤمن في بصيرة بأن التقنية يجب أن تكون في خدمة العدالة والحق، ولذلك نسعى جاهدين لتطوير أدوات 
              تساعد المختصين في اتخاذ قرارات مدروسة ومبنية على أسس علمية ومعرفية متينة.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 space-x-reverse mb-4">
                {feature.icon}
                <h3 className="text-xl font-bold text-green-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="bg-green-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">رؤيتنا</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            أن نكون المنصة الرائدة عالمياً في تطبيق تقنيات الذكاء الاصطناعي لخدمة العدالة، 
            ونموذجاً يُحتذى به في التحول الرقمي للأنظمة القضائية والقانونية.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;