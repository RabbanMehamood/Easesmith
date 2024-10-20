import React from "react";

const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50">
      {/* Cart Heading */}
      <div className="text-lg font-medium mb-4">Your Cart</div>

      {/* Main Content */}
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Congratulations
        </h2>
        <h3 className="text-xl font-bold mb-6">Order Placed!</h3>

        {/* Image */}
        <img
          src="images/thankyouplant.png"
          alt="Plant Icon"
          className="w-24 h-24 mx-auto mb-6"
        />

        {/* Message */}
        <p className="text-gray-500 mb-6">
          Thank you for choosing Chaperone services. We will soon get in touch
          with you!
        </p>

        {/* Continue Shopping Button */}
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md font-semibold">
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
