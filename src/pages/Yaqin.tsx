import React, { useState } from 'react';
import { Scale, Send, MessageCircle, BookOpen, Search, FileText } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Yaqin: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'مرحباً بك في يقين، المستشار القانوني الذكي. كيف يمكنني مساعدتك اليوم؟',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const legalTopics = [
    'قانون العمل السعودي',
    'قانون الشركات',
    'قانون العقارات',
    'قانون الأحوال الشخصية',
    'القانون التجاري',
    'قانون الإجراءات الجزائية'
  ];

  const quickQuestions = [
    'ما هي حقوق العامل في قانون العمل السعودي؟',
    'كيف يتم تأسيس شركة في المملكة؟',
    'ما هي إجراءات الطلاق في النظام السعودي؟',
    'ما هي عقوبة التزوير في النظام السعودي؟'
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // محاكاة رد الذكاء الاصطناعي
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: `بناءً على استفسارك حول "${inputText}"، يمكنني تقديم المعلومات التالية من النظام السعودي:\n\nوفقاً للمادة المعنية في النظام، فإن الإجراءات المطلوبة تشمل:\n1. التقدم بطلب رسمي\n2. تقديم المستندات المطلوبة\n3. دفع الرسوم المحددة\n\nللمزيد من التفاصيل، يُنصح بمراجعة النص الكامل للنظام أو استشارة محامٍ مختص.`,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Scale className="w-16 h-16 text-yellow-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            يقين - المستشار القانوني الذكي
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مساعد ذكي متخصص في القانون السعودي، يقدم استشارات قانونية دقيقة ومرجعية شاملة
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Legal Topics */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center space-x-2 space-x-reverse">
                <BookOpen className="w-5 h-5" />
                <span>المجالات القانونية</span>
              </h3>
              <div className="space-y-2">
                {legalTopics.map((topic, index) => (
                  <button
                    key={index}
                    className="w-full text-right p-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-green-900 rounded-lg transition-colors"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Questions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center space-x-2 space-x-reverse">
                <MessageCircle className="w-5 h-5" />
                <span>أسئلة شائعة</span>
              </h3>
              <div className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="w-full text-right p-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-green-900 rounded-lg transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-10 h-10 bg-green-900 rounded-full flex items-center justify-center">
                    <Scale className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-900">يقين</h3>
                    <p className="text-sm text-gray-600">المستشار القانوني الذكي</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.isUser
                          ? 'bg-yellow-500 text-green-900'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className="text-xs mt-1 opacity-70">
                        {message.timestamp.toLocaleTimeString('ar-SA', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-end">
                    <div className="bg-gray-100 px-4 py-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex space-x-3 space-x-reverse">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="اكتب استفسارك القانوني هنا..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim()}
                    className="bg-yellow-500 hover:bg-yellow-600 text-green-900 px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-900 mb-8 text-center">مميزات أداة يقين</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">بحث متقدم</h3>
              <p className="text-gray-600">بحث سريع ودقيق في جميع الأنظمة واللوائح السعودية</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">استشارات دقيقة</h3>
              <p className="text-gray-600">إجابات مبنية على النصوص القانونية الرسمية</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">مراجع شاملة</h3>
              <p className="text-gray-600">ربط الإجابات بالمواد القانونية والمراجع الأصلية</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yaqin;