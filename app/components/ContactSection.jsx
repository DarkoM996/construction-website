import React from "react";

const ContactSection = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-2/3 relative px-8 py-6 md:py-8 lg:px-28 ">
      {/* Entire div */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-6 py-6 border-t border-primary_backgroundColor-700 ">
        <h2 className="text-4xl md:text-5xl lg:text-6xl">Vancouver</h2>
        {/* Paragraph on the right */}
        <div className="flex flex-col justify-center items-center gap-6 w-full md:w-1/2 lg:w-1/3">
          {/* First item */}
          <div className="flex flex-col md:flex-row justify-start items-start gap-6 text-xl border-b border-primary_customGrey-800 py-4 w-full">
            <div>Phone</div>
            <div>065 887 999</div>
          </div>
          {/* Second item */}
          <div className="flex flex-col md:flex-row justify-start items-start gap-6 text-xl border-b border-primary_customGrey-800 py-4 w-full">
            <div>Email</div>
            <div className="flex flex-row md:flex-col lg:flex-row justify-start items-start w-full">
              contact@
              <div className="flex flex-wrap justify-start items-center">
                camyorkconstruction.com
              </div>
            </div>
          </div>
          {/* Third item */}
          <div className="flex flex-col md:flex-row justify-start items-start gap-6 text-xl border-b border-primary_customGrey-800 py-4 w-full">
            <div>Address</div>
            <div>Vancouver Beach 125 Str. </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
