import React, { useState } from 'react';
import { Eye, Upload, CheckCircle, AlertTriangle, FileText, Image, Video, Music } from 'lucide-react';

const Bayina: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setAnalysisResult(null);
    }
  };

  const handleAnalyze = () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    // محاكاة عملية التحليل
    setTimeout(() => {
      setAnalysisResult({
        authentic: Math.random() > 0.3,
        confidence: Math.floor(Math.random() * 30) + 70,
        details: {
          metadata: 'سليمة',
          digitalSignature: Math.random() > 0.5 ? 'موجودة' : 'غير موجودة',
          manipulation: Math.random() > 0.7 ? 'مكتشفة' : 'غير مكتشفة'
        }
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return <Image className="w-8 h-8 text-blue-500" />;
    if (file.type.startsWith('video/')) return <Video className="w-8 h-8 text-red-500" />;
    if (file.type.startsWith('audio/')) return <Music className="w-8 h-8 text-purple-500" />;
    return <FileText className="w-8 h-8 text-gray-500" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Eye className="w-16 h-16 text-yellow-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            بيّنة - التحقق من الأدلة الرقمية
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            أداة ذكية متقدمة للتحقق من صحة الأدلة الرقمية باستخدام تقنيات الذكاء الاصطناعي المتطورة
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upload Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-900 mb-6">رفع الملف للتحليل</h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-yellow-500 transition-colors">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">اسحب الملف هنا أو اضغط للاختيار</p>
              <input
                type="file"
                onChange={handleFileUpload}
                accept="image/*,video/*,audio/*,.pdf,.doc,.docx"
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="bg-yellow-500 hover:bg-yellow-600 text-green-900 px-6 py-3 rounded-lg cursor-pointer inline-block transition-colors"
              >
                اختيار ملف
              </label>
            </div>

            {selectedFile && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  {getFileIcon(selectedFile)}
                  <div>
                    <p className="font-semibold text-green-900">{selectedFile.name}</p>
                    <p className="text-sm text-gray-600">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} ميجابايت
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="w-full bg-green-900 hover:bg-green-800 text-white px-6 py-3 rounded-lg transition-colors disabled:opacity-50"
                >
                  {isAnalyzing ? 'جاري التحليل...' : 'بدء التحليل'}
                </button>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-900 mb-6">نتائج التحليل</h2>
            
            {!analysisResult && !isAnalyzing && (
              <div className="text-center py-12">
                <Eye className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">قم برفع ملف لبدء عملية التحليل</p>
              </div>
            )}

            {isAnalyzing && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500 mx-auto mb-4"></div>
                <p className="text-gray-600">جاري تحليل الملف باستخدام الذكاء الاصطناعي...</p>
              </div>
            )}

            {analysisResult && (
              <div className="space-y-6">
                <div className={`p-4 rounded-lg ${analysisResult.authentic ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <div className="flex items-center space-x-3 space-x-reverse mb-2">
                    {analysisResult.authentic ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : (
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    )}
                    <h3 className={`text-lg font-semibold ${analysisResult.authentic ? 'text-green-800' : 'text-red-800'}`}>
                      {analysisResult.authentic ? 'الملف أصلي وموثوق' : 'تم اكتشاف تلاعب محتمل'}
                    </h3>
                  </div>
                  <p className={`text-sm ${analysisResult.authentic ? 'text-green-700' : 'text-red-700'}`}>
                    مستوى الثقة: {analysisResult.confidence}%
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-green-900">تفاصيل التحليل</h4>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">البيانات الوصفية</span>
                      <span className="font-semibold text-green-900">{analysisResult.details.metadata}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">التوقيع الرقمي</span>
                      <span className="font-semibold text-green-900">{analysisResult.details.digitalSignature}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">التلاعب</span>
                      <span className="font-semibold text-green-900">{analysisResult.details.manipulation}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-green-900 px-6 py-3 rounded-lg transition-colors font-semibold">
                  تحميل التقرير المفصل
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-900 mb-8 text-center">مميزات أداة بيّنة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">كشف التزييف العميق</h3>
              <p className="text-gray-600">تقنيات متقدمة لكشف التلاعب في الصور والفيديوهات</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">دقة عالية</h3>
              <p className="text-gray-600">معدل دقة يصل إلى 99% في كشف التلاعب</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">تقارير مفصلة</h3>
              <p className="text-gray-600">تقارير شاملة قابلة للاستخدام في المحاكم</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bayina;