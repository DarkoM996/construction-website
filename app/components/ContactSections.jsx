import React from "react";

const ContactSections = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-screen relative px-6 py-4 md:py-8 lg:px-28 ">
      <div className="flex justify-between items-center gap-6">
        <h2>Vancouver</h2>
        <div>
          {/* One item */}
          <div className="flex gap-6">
            <div>Phone</div>
            <div>065 887 999</div>
          </div>
          {/* Second item */}
          <div className="flex gap-6">
            <div>Phone</div>
            <div>065 887 999</div>
          </div>
          {/* Third item */}
          <div className="flex gap-6">
            <div>Phone</div>
            <div>065 887 999</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSections;
