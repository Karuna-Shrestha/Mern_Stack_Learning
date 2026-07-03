import React, { useState } from "react";

function ConfirmBox() {
  const [answer, setAnswer] = useState("");

  return (
    <div className="min-h-screen flex justify-center items-center bg-pink-100">

      <div className="w-[800px] h-[500px] rounded-3xl border-4 border-pink-400 flex justify-center items-center">

        {/* Initial Popup */}
        {answer === "" && (
          <div className="w-[320px] h-[350px] bg-sky-100 rounded-3xl border-4 border-black flex flex-col justify-center items-center gap-10">

            <h1 className="text-4xl font-bold">
              Are you sure?
            </h1>

            <div className="flex gap-8">

              <button
                onClick={() => setAnswer("yes")}
                className="px-8 py-2 bg-green-300 rounded-xl border-2 border-black hover:bg-green-400"
              >
                Yes
              </button>

              <button
                onClick={() => setAnswer("no")}
                className="px-8 py-2 bg-red-300 rounded-xl border-2 border-black hover:bg-red-400"
              >
                No
              </button>

            </div>

          </div>
        )}

        {/* Yes */}
        {answer === "yes" && (
          <button
            className="px-10 py-3 bg-green-500 text-white rounded-xl text-2xl"
          >
            OK
          </button>
        )}

        {/* No */}
        {answer === "no" && (
          <button
            className="px-10 py-3 bg-red-500 text-white rounded-xl text-2xl"
          >
            Cancel
          </button>
        )}

      </div>

    </div>
  );
}

export default ConfirmBox;