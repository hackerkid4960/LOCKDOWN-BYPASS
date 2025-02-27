import { FiDownload, FiShield, FiLock, FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <nav className="p-4 bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-xl md:text-2xl font-bold text-green-600">LOCKDOWN BYPASS</div>
          <Link href="/contact" 
            className="text-green-600 hover:text-green-700 transition-colors">
            Support
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6 px-2">
              LOCKDOWN(B)BYPASS(V)
            </h1>
            
            <div className="max-w-2xl mx-auto px-4">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">What's Inside?</h2>
              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-xl">📁</span>
                  <span>
                    <strong>Bypass Version of LockDown Browser</strong> – A modified version allowing unrestricted access while appearing as the official software.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-xl">📖</span>
                  <span>
                    <strong>Step-by-Step Manual</strong> – A comprehensive guide on installation, setup, and usage, ensuring smooth operation.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8 mb-6 md:mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg md:bg-transparent">
                <FiShield className="w-7 h-7 md:w-8 md:h-8 mx-auto mb-3 md:mb-4 text-green-500" />
                <h3 className="font-semibold mb-1 md:mb-2">Secure Delivery</h3>
                <p className="text-sm md:text-base text-gray-600">Instant download access</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg md:bg-transparent">
                <FiLock className="w-7 h-7 md:w-8 md:h-8 mx-auto mb-3 md:mb-4 text-green-500" />
                <h3 className="font-semibold mb-1 md:mb-2">Protected Content</h3>
                <p className="text-sm md:text-base text-gray-600">Secure Access</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg md:bg-transparent">
                <FiCheckCircle className="w-7 h-7 md:w-8 md:h-8 mx-auto mb-3 md:mb-4 text-green-500" />
                <h3 className="font-semibold mb-1 md:mb-2">Verified Package</h3>
                <p className="text-sm md:text-base text-gray-600">Tested & Working</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8 text-center mb-6 md:mb-12">
            <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">$49</div>
            <Link href="/checkout"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl text-lg md:text-xl font-semibold hover:bg-green-700 transition-colors w-full md:w-auto">
              <FiDownload />
              Buy Now
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Package Details</h2>
            <ul className="space-y-4">
              {[
                'Complete file package',
                'Instant download after purchase',
                'Secure payment processing',
                '24/7 download availability'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-600">
                  <FiCheckCircle className="text-green-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
} 