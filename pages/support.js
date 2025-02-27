import { useState } from 'react';
import { FiArrowLeft, FiHelpCircle, FiDollarSign, FiDownload, FiMessageCircle } from 'react-icons/fi';
import Link from 'next/link';

export default function Support() {
  const [formData, setFormData] = useState({
    issueType: '',
    transactionId: '',
    description: '',
    contactMethod: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Support request received. We will respond within 24-48 hours.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" 
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <FiArrowLeft className="mr-2" /> Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Support</h1>
            <p className="text-gray-600">
              If you have any questions or issues, our support team is here to help you with your purchase and download process.
            </p>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FiHelpCircle />
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <FiDollarSign className="text-green-600" />
                  How do I purchase the ZIP file?
                </h3>
                <ul className="text-gray-600 ml-6 list-disc space-y-1">
                  <li>Click the Buy Now button on the homepage</li>
                  <li>Complete the payment through our secure gateway</li>
                  <li>You will be redirected to the download page after payment</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <FiDownload className="text-green-600" />
                  I didn't receive my download link. What should I do?
                </h3>
                <ul className="text-gray-600 ml-6 list-disc space-y-1">
                  <li>Ensure that your payment was completed successfully</li>
                  <li>Check your spam/junk folder for the confirmation email</li>
                  <li>If you still haven't received it, reach out to our support team below</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <FiMessageCircle className="text-green-600" />
                  The download link is not working. How can I fix this?
                </h3>
                <ul className="text-gray-600 ml-6 list-disc space-y-1">
                  <li>The download link may expire after a certain time. Try refreshing the page</li>
                  <li>If the issue persists, contact support with your transaction ID</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Support Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Support Request</h2>
            <p className="text-gray-600 mb-6">For any unresolved issues, please fill out the form below:</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Issue Type</label>
                <select 
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={formData.issueType}
                  onChange={(e) => setFormData({...formData, issueType: e.target.value})}
                >
                  <option value="">Select an issue type</option>
                  <option value="payment">Payment</option>
                  <option value="download">Download</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Transaction ID (if applicable)</label>
                <input 
                  type="text"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={formData.transactionId}
                  onChange={(e) => setFormData({...formData, transactionId: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Description of Issue</label>
                <textarea 
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  rows="4"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Preferred Contact Method</label>
                <select 
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={formData.contactMethod}
                  onChange={(e) => setFormData({...formData, contactMethod: e.target.value})}
                >
                  <option value="">Select contact method</option>
                  <option value="email">Email</option>
                  <option value="chat">Chat</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
              >
                Submit Support Request
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-500 text-center">
              We aim to respond to support inquiries within 24-48 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 