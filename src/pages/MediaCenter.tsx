import React from 'react';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { articles } from '../constants/articles';

const MediaCenter: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            المركز الإعلامي
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            آخر الأخبار والمقالات حول التحول الرقمي في القطاع العدلي ومستجدات منصة بصيرة
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-green-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <button className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-colors space-x-1 space-x-reverse">
                  <span>قراءة المقال</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-green-900 hover:bg-green-800 text-white px-8 py-3 rounded-lg transition-colors duration-300 font-medium">
            تحميل المزيد من المقالات
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaCenter;