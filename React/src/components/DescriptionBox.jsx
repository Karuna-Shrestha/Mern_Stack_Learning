import React, { useState } from "react";

const DescriptionBox = () => {
  const [topic, setTopic] = useState("");

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-[1000px] h-[700px] bg-pink-300 border-2 border-Black-500 flex flex-col items-center pt-10">

        {/* Buttons */}
        <div className="flex gap-10 border-b-2 border-black-500 pb-2">

          <button
            className="text-pink-600 font-bold text-xl"
            onClick={() => setTopic("html")}
          >
            HTML
          </button>

          <button
            className="text-pink-600 font-bold text-xl"
            onClick={() => setTopic("css")}
          >
            CSS
          </button>

          <button
            className="text-pink-600 font-bold text-xl"
            onClick={() => setTopic("javascript")}
          >
            JavaScript
          </button>

        </div>

        {/* Content Box */}
        <div className="mt-10 w-[700px] h-[450px] bg-red-100 border-2 border-pink-500 flex justify-center items-center p-10">

          {topic === "html" && (
            <div>
              <h1 className="text-3xl font-bold mb-4">HTML</h1>

              <p className="text-lg">
                HTML stands for HyperText Markup Language.
                It is used to create the structure of web pages using
                elements like headings, paragraphs, images, links and forms.
              </p>
            </div>
          )}

          {topic === "css" && (
            <div>
              <h1 className="text-3xl font-bold mb-4">CSS</h1>

              <p className="text-lg">
                CSS stands for Cascading Style Sheets.
                It is used to style HTML elements by adding colors,
                fonts, layouts, spacing and animations.
              </p>
            </div>
          )}

          {topic === "javascript" && (
            <div>
              <h1 className="text-3xl font-bold mb-4">JavaScript</h1>

              <p className="text-lg">
                JavaScript is a programming language.
                It makes websites interactive by handling events,
                calculations, API calls and dynamic content.
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default DescriptionBox;