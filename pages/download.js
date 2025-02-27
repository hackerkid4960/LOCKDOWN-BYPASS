import { useState } from 'react';
import { FiDownload, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

export default function Download() {
  const [downloadStatus, setDownloadStatus] = useState('');
  
  // Direct download link from Mediafire
  const fileUrl = "https://download1584.mediafire.com/0rkx8rpd5uhhgymg/0rkx8rpd5uhhgym/Resspundus_Lockdown_Browser.zip";

  const handleDownload = async () => {
    try {
      setDownloadStatus('downloading');
      
      // Create and click a temporary download link
      const link = document.createElement('a');
      link.href = fileUrl;
      link.setAttribute('download', 'Resspundus_Lockdown_Browser.zip');
      link.setAttribute('target', '_blank');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Also open the Mediafire page as backup
      window.open("https://www.mediafire.com/file/0rkx8rpd5uhhgym/Resspundus_Lockdown_Browser.zip/file", "_blank");
      
      setDownloadStatus('success');
    } catch (error) {
      setDownloadStatus('error');
      // Fallback to direct Mediafire page if download fails
      window.open("https://www.mediafire.com/file/0rkx8rpd5uhhgym/Resspundus_Lockdown_Browser.zip/file", "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-4 md:p-6">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Your Download is Ready
          </h1>

          <div className="bg-green-50 rounded-lg p-4 mb-6">
            <h2 className="font-semibold mb-2">Instructions:</h2>
            <ol className="text-sm md:text-base space-y-2 text-gray-600">
              <li>1. Click the download button below</li>
              <li>2. If download doesn't start, click "Download" on the Mediafire page</li>
              <li>3. Save the ZIP file when prompted</li>
              <li>4. Extract and follow included instructions</li>
            </ol>
          </div>

          <button 
            onClick={handleDownload}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
          >
            <FiDownload />
            Download File
          </button>

          {downloadStatus === 'success' && (
            <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg flex items-center gap-2">
              <FiCheckCircle />
              <div>
                <p className="font-semibold">Download started!</p>
                <p className="text-sm">If download doesn't start, use the Mediafire page that opened.</p>
              </div>
            </div>
          )}

          {downloadStatus === 'error' && (
            <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
              <FiAlertCircle />
              <div>
                <p className="font-semibold">Download didn't start?</p>
                <p className="text-sm">Use the Mediafire page that opened to download.</p>
              </div>
            </div>
          )}

          <div className="mt-4 text-xs text-gray-500 flex items-start gap-2">
            <FiAlertCircle className="flex-shrink-0 mt-0.5" />
            If you have any issues, try using the Mediafire page directly
          </div>
        </div>
      </div>
    </div>
  );
} 