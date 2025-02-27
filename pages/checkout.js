import { useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import Link from 'next/link';

export default function Checkout() {
  useEffect(() => {
    const script = document.createElement('script');
    // Updated with your client ID
    script.src = "https://www.paypal.com/sdk/js?client-id=AXtwGAGJMNQ9AXkpbbUHMZi2ySVP8CXk1AlQ4vYxqiEWYY8U_yrSFM8OYzlx2DPGf2piAEMB1f72_17j&currency=USD";
    script.async = true;

    script.onload = () => {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                description: 'LOCKDOWN(B)BYPASS(V)',
                amount: {
                  value: '49.00'
                }
              }]
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then(function(details) {
              window.location.href = '/download';
            });
          }
        })
        .render('#paypal-button-container');
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" 
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <IoArrowBack className="mr-2" /> Back to Home
        </Link>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Secure Checkout</h1>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="text-center">
                <div className="text-sm text-gray-600">Total Amount</div>
                <div className="text-3xl font-bold text-gray-800">$49</div>
              </div>
            </div>

            <div id="paypal-button-container"></div>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                Secure payment processed by PayPal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 