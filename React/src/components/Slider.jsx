import React, { useState } from "react";

const SliderPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      {/* Main Container */}
      <div className="relative w-[1100px] h-[700px] bg-pink-200 border-2 border-black-500 overflow-hidden">

        {/* Open Button */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="absolute top-5 left-5 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Open
          </button>
        )}

        {/* Slider */}
        <div
          className={`absolute top-0 left-0 h-full w-[320px] bg-sky-300 border-r-2 border-black-500
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-3xl hover:scale-110"
          >
            ❌
          </button>

          {/* Content */}
          <div className="flex flex-col justify-center items-center h-full gap-8">

            <h1 className="text-4xl font-bold">
              Are you sure?
            </h1>

            <div className="flex gap-5">

              <button
                onClick={() => {
                  alert("Yes Clicked");
                  setIsOpen(false);
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
              >
                Yes
              </button>

              <button
                onClick={() => {
                  alert("No Clicked");
                  setIsOpen(false);
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md"
              >
                No
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderPage;