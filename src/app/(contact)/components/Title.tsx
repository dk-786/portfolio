import React from "react";

const Title = () => {
  return (
    <div className="text-center py-12  text-white">
      {/* Breadcrumb */}
      <div className="flex items-center justify-center gap-4 text-xl">
        <span className="text-white hover:text-[#ffbd4a] cursor-pointer">
          Home
        </span>
        <span className="h-px w-10 bg-gray-500"></span>
        <span className="text-[#ffbd4a]  cursor-pointer">
          Contact me
        </span>
      </div>

      <h1 className="mt-6 text-6xl  leading- tracking-wide">
        Find main the best suites
      </h1>
    </div>
  );
};

export default Title;
