import React, { useState, useEffect } from "react";

function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };

  const pause = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-200 via-fuchsia-100 to-purple-200">

      <div className="w-[850px] h-[550px] bg-pink-100 border-4 border-fuchsia-400 rounded-[35px] shadow-[0_0_40px_rgba(236,72,153,0.4)] flex flex-col justify-center items-center">

        <h1 className="text-6xl font-extrabold text-fuchsia-600 tracking-[8px] drop-shadow-lg mb-12">
          {hrs} : {mins} : {secs}
        </h1>

        <div className="flex gap-8">

          <button
            onClick={start}
            className="px-8 py-3 bg-pink-500 text-white text-2xl font-bold rounded-2xl border-2 border-pink-700 shadow-lg hover:bg-pink-600 hover:scale-110 transition duration-300"
          >
            💖 Start
          </button>

          <button
            onClick={pause}
            className="px-8 py-3 bg-purple-500 text-white text-2xl font-bold rounded-2xl border-2 border-purple-700 shadow-lg hover:bg-purple-600 hover:scale-110 transition duration-300"
          >
            🌸 Pause
          </button>

          <button
            onClick={reset}
            className="px-8 py-3 bg-rose-400 text-white text-2xl font-bold rounded-2xl border-2 border-rose-600 shadow-lg hover:bg-rose-500 hover:scale-110 transition duration-300"
          >
            ✨ Reset
          </button>

        </div>

        <p className="mt-10 text-pink-600 text-xl font-semibold">
          🎀 Stay Productive Bestie! 🎀
        </p>

      </div>

    </div>
  );
}

export default StopWatch;