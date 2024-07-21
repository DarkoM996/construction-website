import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-screen relative px-6 py-4 lg:px-28">
      {/* Entire div */}
      <div>
        <h2>Order a Call</h2>
        {/* Contact Form on the right */}
        <div className="max-w-screen-md mx-auto w-full h-[600px] relative">
          <label htmlFor="name">Name</label>
          <label htmlFor="email">Name</label>
          <label htmlFor="name">Name</label>
          <button className="p-4 bg-black border border-primary_customGrey-950">
            Order a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
