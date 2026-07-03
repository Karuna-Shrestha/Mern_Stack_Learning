import React, {useState} from 'react'

const LoginPage = () => {
 const init ={
    email:"",
    password:"",
 };

 const [formData, setFormData] = useState(init);
 const [error, setError] = useState("");

 const handleChange = (e) => {
    setFormData((prev) => ({
       ...prev, [e.target.name]: e.target.value,
    }));

    };

    const handleSubmit =(e) =>{
        e.preventDefault();

        if (formData.email === ""){
            setError("Email is required.");
            return;
        }

        if (formData.password === ""){
            setError("Password is required.");
            return;
        }

        const user = JSON.parse(localStorage.getItem("user"));

        if(!user) {
            setError("No registered user found.");
            return;
        }

        if(
            user.email === formData.email &&
            user.password === formData.password
        ){
            alert("Login Successful!");
            setError("");
        }else{
            setError("Invalid email or password.");

        }

        setFormData(init);
     };

 
  return (
    <div className="grid place-items-center h-screen bg-pink-100">
    <form
    onSubmit={handleSubmit}
    className="w-[400px] p-6 rounded-xl shadow-lg bg-white flex flex-col gap-4"
    >
    
    <h1 className="text-3xl font-bold text-center">
    Login
    </h1>

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

        {error &&(
            <p className="text-red-500">
                {error}
            </p>
        )}

        <button 
        type="submit"
        className="bg-pink-500 text-white p-2 rounded hover:bg-pink-600"
        >
        Login
        </button>

    </form>
      
    </div>
  );
};

export default LoginPage;
