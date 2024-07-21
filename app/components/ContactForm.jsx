import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-screen relative px-6 py-4 lg:px-28">
      {/* Entire div */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <h2>Order a Call</h2>
        {/* Contact Form on the right */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 lg:w-1/3">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="my-4 p-2 bg-primary_backgroundColor-900 border-b border-primary_customGrey-800"
          />
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="my-4 p-2 bg-primary_backgroundColor-900 border-b border-primary_customGrey-800"
          />

          <button className="p-4 bg-black border border-primary_customGrey-950">
            Order a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
