import React, { useState } from "react";

const OnOffButton = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        className={`w-[900px] h-[650px] border-2 border-black-500 flex justify-center items-center transition-all duration-500 ${
          isOn ? "bg-purple-200" : "bg-red-200"
        }`}
      >
        <button
          onClick={() => setIsOn(!isOn)}
          className="w-40 h-16 bg-yellow-100 border-2 border-black-500 rounded-md text-2xl font-semibold text-purple-700 hover:scale-105 transition-all duration-300"
        >
          {isOn ? "Off" : "On"}
        </button>
      </div>
    </div>
  );
};

export default OnOffButton;