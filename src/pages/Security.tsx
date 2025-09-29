import React from 'react';
import { Shield, Lock, Eye, Server, CheckCircle, AlertTriangle } from 'lucide-react';

const Security: React.FC = () => {
  const securityFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'التشفير المتقدم',
      description: 'تشفير البيانات باستخدام معايير AES-256 لضمان أقصى درجات الحماية'
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'المصادقة المتعددة',
      description: 'نظام مصادقة متعدد المستويات يضمن وصول المصرح لهم فقط'
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: 'المراقبة المستمرة',
      description: 'مراقبة النظام على مدار الساعة لاكتشاف أي نشاط مشبوه فوراً'
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'البنية التحتية الآمنة',
      description: 'خوادم محلية معتمدة تلبي أعلى المعايير الأمنية الحكومية'
    }
  ];

  const certifications = [
    'ISO 27001 - إدارة أمن المعلومات',
    'SOC 2 Type II - معايير الأمان والتوفر',
    'معايير الأمان الحكومية السعودية',
    'شهادة الامتثال لحماية البيانات الشخصية'
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            الأمان وحماية البيانات
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نلتزم بأعلى معايير الأمان السيبراني لحماية البيانات الحساسة وضمان سرية المعلومات
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>

        {/* Security Alert */}
        <div className="bg-green-100 border border-green-200 rounded-lg p-6 mb-12">
          <div className="flex items-center space-x-3 space-x-reverse">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-green-800">نظام آمن ومعتمد</h3>
              <p className="text-green-700">
                منصة بصيرة مصممة وفقاً لأعلى المعايير الأمنية المعتمدة في المملكة العربية السعودية
              </p>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 space-x-reverse mb-4">
                {feature.icon}
                <h3 className="text-xl font-bold text-green-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Data Protection */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-8 text-center">
            حماية البيانات والخصوصية
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-900 mb-4">التزامنا بالخصوصية</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>لا نحتفظ بأي بيانات شخصية غير ضرورية</span>
                </li>
                <li className="flex items-start space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>تشفير جميع البيانات أثناء النقل والتخزين</span>
                </li>
                <li className="flex items-start space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>حذف البيانات المؤقتة تلقائياً بعد المعالجة</span>
                </li>
                <li className="flex items-start space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>الامتثال الكامل لقوانين حماية البيانات المحلية</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-green-900 mb-4">الشهادات والاعتمادات</h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start space-x-3 space-x-reverse text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Security Warning */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start space-x-3 space-x-reverse">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">إرشادات الاستخدام الآمن</h3>
              <ul className="text-yellow-700 space-y-1 text-sm">
                <li>• تأكد من تسجيل الخروج بعد انتهاء جلسة العمل</li>
                <li>• لا تشارك بيانات الدخول مع أي شخص آخر</li>
                <li>• استخدم كلمة مرور قوية وفريدة للحساب</li>
                <li>• تحقق من صحة رابط الموقع قبل إدخال البيانات</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;