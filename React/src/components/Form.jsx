import React, { useState } from "react";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../Pages/Register";


const Form = () => {
  const [formType, setFormType] = useState("");

  return (
    <div className="min-h-screen flex justify-center items-center bg-pink-100">

      {formType === "" && (
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-5 w-80">
          <h1 className="text-3xl font-bold text-center">
            Welcome
          </h1>

          <button
            onClick={() => setFormType("login")}
            className="bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
          >
            Login
          </button>

          <button
            onClick={() => setFormType("register")}
            className="bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
          >
            Register
          </button>
        </div>
      )}

      {formType === "login" && (
        <div>
          <LoginPage />

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <button
              onClick={() => setFormType("register")}
              className="text-blue-600 underline"
            >
              Register
            </button>
          </p>
        </div>
      )}

      {formType === "register" && (
        <div>
          <RegisterPage />

          <p className="text-center mt-4">
            Already have an account?{" "}
            <button
              onClick={() => setFormType("login")}
              className="text-blue-600 underline"
            >
              Login
            </button>
          </p>
        </div>
      )}

    </div>
  );
};

export default Form;