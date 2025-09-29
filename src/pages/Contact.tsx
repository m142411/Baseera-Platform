import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            تواصل معنا
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نحن هنا للإجابة على استفساراتكم ومساعدتكم في الاستفادة من منصة بصيرة
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-900 mb-6">إرسال رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right resize-vertical"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold px-6 py-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 space-x-reverse"
              >
                <Send className="w-5 h-5" />
                <span>إرسال الرسالة</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-green-900 text-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">معلومات الاتصال</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4 space-x-reverse">
                <Mail className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">البريد الإلكتروني</h3>
                  <p className="text-gray-300">info@basira.gov.sa</p>
                  <p className="text-gray-300">support@basira.gov.sa</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <Phone className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">الهاتف</h3>
                  <p className="text-gray-300">+966 11 123 4567</p>
                  <p className="text-gray-300 text-sm">الأحد - الخميس: 8:00 ص - 5:00 م</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <MapPin className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">العنوان</h3>
                  <p className="text-gray-300">وزارة العدل</p>
                  <p className="text-gray-300">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-green-700">
              <h3 className="text-lg font-semibold mb-4">تابعنا على وسائل التواصل</h3>
              <div className="flex space-x-4 space-x-reverse">
                <a href="#" className="w-10 h-10 bg-yellow-500 hover:bg-yellow-400 text-green-900 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-sm font-bold">تويتر</span>
                </a>
                <a href="#" className="w-10 h-10 bg-yellow-500 hover:bg-yellow-400 text-green-900 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-sm font-bold">لينكد</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;