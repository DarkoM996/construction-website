import React from "react";

const CorporateBuildingAbout = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-[70%] relative px-6 py-4 md:py-10 lg:pb-24 lg:px-28">
      <div className="flex flex-col lg:flex-row justify-between items-start py-8 gap-6 lg:gap-32 lg:py-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl w-full lg:w-2/3">
          We recently led the development of Building X, a premium building that
          we made for a client in Vancouver, Canada. This was made by the latest
          standards, with emphaphis on ultra high quality and well within the
          appropriate time.
        </h2>
        <div className="w-full sm:w-1/2 lg:w-1/2">
          {/* First item */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-xl border-b border-primary_customGrey-800 py-4 w-full">
            <div>Directors</div>
            <div>Ma Yansong, Yosuke Hayano, Dang Qun</div>
          </div>
          {/* Second item */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-xl border-b border-primary_customGrey-800 py-4 w-full">
            <div>Client</div>
            <div>Harbin Songbei Investment </div>
          </div>
          {/* Third item */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-xl border-b border-primary_customGrey-800 py-4 w-full">
            <div>Address</div>
            <div>Vancouver Beach 125 Str. </div>
          </div>
          {/* Fourth item */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-xl border-b border-primary_customGrey-800 py-4 w-full">
            <div>Bim</div>
            <div>Genry Technologies Co.Ltd</div>
          </div>
          {/* Fifth item */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-xl border-b border-primary_customGrey-800 py-4 w-full">
            <div>Landscape Architect</div>
            <div>Vancouver Institute </div>
          </div>
          {/* Sixth item */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-xl border-b border-primary_customGrey-800 py-4 w-full">
            <div>Interior Design</div>
            <div>Vancouver Architects </div>
          </div>
          {/* Seventh item */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-xl border-b border-primary_customGrey-800 py-4 w-full">
            <div>Mechanical Engineers </div>
            <div>Vancouver Era Architectural Design, Ltd </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateBuildingAbout;
