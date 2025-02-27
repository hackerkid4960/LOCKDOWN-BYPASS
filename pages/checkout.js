import { useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

export default function Checkout() {
  useEffect(() => {
    // Load PayPal Script with your Client ID
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=AXtwGAGJMNQ9AXkpbbUHMZi2ySVP8CXk1AlQ4vYxqiEWYY8U_yrSFM8OYzlx2DPGf2piAEMB1f72_17j&currency=USD";
    script.async = true;

    script.onload = () => {
      window.paypal
        .Buttons({
          style: {
            layout: 'vertical',  // Better for mobile
            color: 'blue',       // Classic PayPal blue
            shape: 'rect',       // Rectangular button
            label: 'pay'         // "Pay Now" text
          },
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: '49.00'
                }
              }]
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then(function(details) {
              handlePayment();
            });
          }
        })
        .render('#paypal-button-container');
    };

    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    alert('Payment successful!');
    // Redirect to download page
    window.location.href = '/download';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        {/* Mobile-friendly back button */}
        <Link href="/" 
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 text-sm md:text-base">
          <FiArrowLeft className="mr-2" /> Back to Home
        </Link>

        {/* Mobile-optimized payment card */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-4 md:p-6">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
            Complete Your Purchase
          </h1>
          
          {/* Mobile-friendly price display */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="text-center">
              <div className="text-sm text-gray-600">Total Amount</div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800">$49</div>
            </div>
          </div>

          {/* PayPal Button - will be mobile responsive */}
          <div id="paypal-button-container" className="w-full max-w-xs mx-auto"></div>
          
          {/* Mobile-friendly security text */}
          <div className="mt-6 text-center text-xs md:text-sm text-gray-500">
            Secure payment processed by PayPal
          </div>
        </div>
      </div>
    </div>
  );
} 