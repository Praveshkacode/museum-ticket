import React from 'react';

const ChatbotTicketingSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:space-x-10 mb-12">
      <section className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Chatbot Ticketing System
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Booking tickets through an online chatbot offers convenience and efficiency. 
          Users can purchase tickets anytime without waiting in queues or navigating 
          complex websites, making the process faster and more accessible. Additionally, 
          chatbots provide instant responses and personalized support, enhancing the 
          overall user experience.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 text-lg md:text-xl rounded-lg hover:bg-orange-600">
          Book Now
        </button>
      </section>
      <section className="w-full lg:w-1/2 mt-6 lg:mt-0">
        <img 
          className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80" 
          src="https://www.trawell.in/admin/images/upload/630209831Allahabad_Anand_Bhavan_Main.jpg" 
          alt="Museum" 
        />
      </section>
    </div>
  );
};

export default ChatbotTicketingSection;
