
import React, {useState} from "react";

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
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value}));

         if (formData.name.length === 0){
            setError("Name field Required");
            return;
        }else{
            setError("");
        }

        if (formData.address.length === 0){
            setError("Address field Required");
            return;
        }else{
            setError("");
        }

        if (formData.phone.length === 0){
            setError("Phone field Required");
            return;
        }else{
            setError("");
        }

        if (formData.email.length === 0){
            setError("Email field Required");
            return;
        }else{
            setError("");
        }

        if (formData.password.length < 8){
            setError("Password must be of 8 character.");
            return;
        }else{
            setError("");
        }
        console.log(formData);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        
       

        console.log(formData);

        localStorage.setItem("user", JSON.stringify(formData));
        localStorage.removeItem("user");
        JSON.parse(localStorage.getItem("user"));

        setFormData(init);
    };
        

   
  return (
    <div className="grid place-items-center h-screen w-full">
      <form 
       onSubmit={handleSubmit}
       className="w-120 p-4 shadow-2xl rounded-lg flex flex-col gap-4"
      >
        <h1 className="text-4xl font-bold">Register</h1>
        <input
        value={formData.name}
        onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter Your name"
        />

        <input
          value={formData.address}
          onChange={handleChange}
          type="text"
          name="address"
          placeholder="Enter Your Address"
        />

        <input
          value={formData.phone}
          onChange={handleChange}
          type="phone"
          name="phone"
          placeholder="Enter Your Phone"
        />

        <input
          value={formData.email}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter Your Email"
        />
        <input
          value={formData.password}
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Enter Your Password"


        />
        {error && <span className="text-red-500">{error}</span>}

        <button
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold"
          type="submit"
        >
          Register
        </button>


      </form>
    
    </div>
  )
}

export default RegisterPage;
