import { useState } from 'react';
import { FiHelpCircle, FiDollarSign, FiDownload, FiMessageCircle } from 'react-icons/fi';
import { IoArrowBack } from 'react-icons/io5';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message received!');
    setFormData({ name: '', email: '', issue: '' }); // Clear form
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" 
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <IoArrowBack className="mr-2" /> Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Support</h1>
            <p className="text-gray-600">
              If you have any questions or issues, feel free to read through our frequently asked questions below.
            </p>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FiHelpCircle className="text-green-600" />
              Frequently Asked Questions (FAQs)
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FiDollarSign className="text-green-600" />
                  How do I purchase the ZIP file?
                </h3>
                <ul className="text-gray-600 ml-6 list-disc space-y-2">
                  <li>Click the Buy Now button on the homepage</li>
                  <li>Complete the payment through our secure gateway</li>
                  <li>You will be redirected to the download page after payment confirmation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FiDownload className="text-green-600" />
                  I didn't receive my download link. What should I do?
                </h3>
                <ul className="text-gray-600 ml-6 list-disc space-y-2">
                  <li>Ensure that your payment was completed successfully</li>
                  <li>Check your spam/junk folder for the confirmation email</li>
                  <li>Try refreshing the download page</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FiMessageCircle className="text-green-600" />
                  The download link is not working. How can I fix this?
                </h3>
                <ul className="text-gray-600 ml-6 list-disc space-y-2">
                  <li>The download link may expire after a certain time. Try refreshing the page</li>
                  <li>Make sure you're using a modern web browser</li>
                  <li>Clear your browser cache and try again</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Contact Support</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Issue Description</label>
                <textarea
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  rows="4"
                  placeholder="Describe your issue"
                  value={formData.issue}
                  onChange={(e) => setFormData({...formData, issue: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                <FiMessageCircle />
                Send Message
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-500 text-center">
              We typically respond within 24-48 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 