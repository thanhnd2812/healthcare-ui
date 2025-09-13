
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Introduction Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4 tracking-wide">
              NGUYEN DUC THANH
            </h1>
            <div className="w-20 h-px bg-orange-500 mx-auto mb-4"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide">
              FRONTEND REMOTE DEVELOPER
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-8 flex items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="text-sm">📧</span>
              <a 
                href="mailto:thanhnd.it@icloud.com" 
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                thanhnd.it@icloud.com
              </a>
            </div>
            <div className="w-px h-4 bg-gray-500" />
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="text-sm">📱</span>
              <a 
                href="tel:+84916801271" 
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                +84 916 801 271
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-lg font-medium text-gray-800 mb-6">
              Authentication Test Credentials
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                <span className="text-gray-600 font-medium">Username:</span>
                <code className="bg-gray-200 px-3 py-1 rounded text-sm font-mono">admin</code>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                <span className="text-gray-600 font-medium">Password:</span>
                <code className="bg-gray-200 px-3 py-1 rounded text-sm font-mono">password123</code>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6 italic">
              Use these credentials to access authenticated pages and explore the full application features.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
