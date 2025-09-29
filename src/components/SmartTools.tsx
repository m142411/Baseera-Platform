import React from 'react';
import { Eye, Scale } from 'lucide-react';
import { tools } from '../constants/tools';

const SmartTools: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'eye':
        return <Eye className="w-12 h-12 text-yellow-500" />;
      case 'scale':
        return <Scale className="w-12 h-12 text-yellow-500" />;
      default:
        return <Eye className="w-12 h-12 text-yellow-500" />;
    }
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            أدواتنا الذكية في خدمة العدالة
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  {getIcon(tool.icon)}
                  <div className="mr-4">
                    <h3 className="text-2xl font-bold text-green-900">{tool.title}</h3>
                    <p className="text-lg text-gray-600">{tool.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  {tool.description}
                </p>
                
                <a 
                  href={`/${tool.id}`}
                  className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-300 w-full sm:w-auto inline-block text-center"
                >
                  {tool.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartTools;