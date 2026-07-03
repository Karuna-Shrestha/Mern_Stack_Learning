import React, { useState } from "react";

const RegisterPage = () => {
  const init = {
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(init);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.trim() === "") {
      setError("Name is required.");
      return;
    }

    if (formData.address.trim() === "") {
      setError("Address is required.");
      return;
    }

    if (formData.phone.trim() === "") {
      setError("Phone number is required.");
      return;
    }

    if (formData.email.trim() === "") {
      setError("Email is required.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setError("");

    // Save user data
    localStorage.setItem("user", JSON.stringify(formData));

    alert("Registration Successful!");

    // Clear form
    setFormData(init);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-pink-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold text-center">
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {error && (
          <p className="text-red-500">{error}</p>
        )}

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;