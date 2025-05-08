import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const TermsAndConditions = () => {
  // You can use the 'darkMode' prop to conditionally apply dark mode classes

  return (
    <div>
      <Navbar />
      <div className={`p-10 lg:px-20`}>
        <div className={`mx-auto dark:text-white text-gray-900`}>
          <h1 className={`text-2xl font-semibold mb-4 dark:text-white text-gray-900`}>Terms and Conditions</h1>

          <p className={`mb-4 dark:text-gray-300 text-gray-700`}>
            Welcome to LuminexTV! Please read these Terms and Conditions carefully before using our services. By accessing or using our services, you agree to comply with and be bound by these terms.
          </p>

          <h2 className={`text-xl font-semibold mt-6 mb-3 dark:text-white text-gray-900`}>Use of Our Services</h2>
          <p className={`mb-4 dark:text-gray-300 text-gray-700`}>
            You must only use our services in accordance with applicable laws and regulations. When using our services, you agree not to engage in any unlawful or prohibited activities.
          </p>

          <h2 className={`text-xl font-semibold mt-6 mb-3 dark:text-white text-gray-900`}>User Accounts</h2>
          <p className={`mb-4 dark:text-gray-300 text-gray-700`}>
            To access certain features of our services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and ensuring their security.
          </p>

          <h2 className={`text-xl font-semibold mt-6 mb-3 dark:text-white text-gray-900`}>Intellectual Property</h2>
          <p className={`mb-4 dark:text-gray-300 text-gray-700`}>
            All content included in our services, such as text, graphics, logos, images, and software, is the property of LuminexTV and is protected by copyright and other intellectual property laws.
          </p>
          <h2 className={`text-xl font-semibold mt-6 mb-3 dark:text-white text-gray-900`}>Warranty</h2>
            <p className={`mb-4 dark:text-gray-300 text-gray-700`}>
            Seller is responsible for the warranty of the product. LuminexTV is not responsible for any warranty of the product.
            </p>

          {/* Add more sections and details as needed */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
