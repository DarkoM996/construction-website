import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-2/3 relative px-8 py-6 md:px-12 md:py-8 lg:px-28">
      {/* Entire div */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-t border-primary_backgroundColor-700 py-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl ">Order a Call</h2>
        {/* Contact Form on the right */}
        <form
          action=""
          className="flex flex-col justify-start items-start gap-6 w-full md:w-1/2 lg:w-1/3"
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="my-2 p-2 bg-primary_backgroundColor-900 border-b border-primary_customGrey-800 w-full"
          />
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="my-2 p-2 bg-primary_backgroundColor-900 border-b border-primary_customGrey-800 w-full"
          />
          <textarea
            className="bg-primary_backgroundColor-900 p-2 my-2 border-b border-primary_customGrey-800  w-full"
            name="message"
            rows="10"
            placeholder="Your message here"
          ></textarea>

          <button className="p-4 bg-black border border-primary_customGrey-950">
            Order a Call
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
