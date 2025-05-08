import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const PrivacyPolicy = () => {
  // You can use the 'darkMode' prop to conditionally apply dark mode classes

  return (
<div>
    <Navbar/>
<div className={`  p-10 lg:px-20`}>
      <div className={` mx-auto    dark:text-white  text-gray-900  `}>
        <h1 className={`text-2xl font-semibold mb-4   dark:text-white  text-gray-900  `}>Privacy Policy</h1>

        <p className={`mb-4   dark:text-gray-300  text-gray-700  `}>
          At LuminexTV, we are committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your information. By using our services, you consent to the practices described in this policy.
        </p>

        <h2 className={`text-xl font-semibold mt-6 mb-3   dark:text-white  text-gray-900  `}>Information We Collect</h2>
        <p className={`mb-4   dark:text-gray-300  text-gray-700  `}>
          We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, shipping address, and payment information.
        </p>

        <p className={`mb-4   dark:text-gray-300  text-gray-700  `}>
          We also collect information automatically when you use our services, including your IP address, device information, and usage data. This data helps us improve our services and tailor content to your preferences.
        </p>

        <h2 className={`text-xl font-semibold mt-6 mb-3   dark:text-white  text-gray-900  `}>How We Use Your Information</h2>
        <p className={`mb-4   dark:text-gray-300  text-gray-700  `}>
          We may use your information to:
        </p>
        <ul className={`list-disc pl-8 mb-4   dark:text-gray-300  text-gray-700  `}>
          <li>Provide, maintain, and improve our services.</li>
          <li>Respond to your inquiries and provide customer support.</li>
          <li>Process transactions and send transaction notifications.</li>
          <li>Personalize and enhance your experience.</li>
          <li>Send you updates, newsletters, and promotional materials.</li>
        </ul>

        {/* Add more sections and details as needed */}
      </div>
    </div>
    <Footer/>
</div>
  );
};

export default PrivacyPolicy;
