import axios from 'axios';
import React, { useState } from 'react'

const PostAPIFetch = () => {


    const init = {
        title:"",
        price: 0,
        description:"",
        category:"",
        image:"",
    }

    const[formData, setFormData] = useState(init);
    const[error, setError] = useState("");

    const handleChange = (e) => {
        setFormData ((prev)=> ({ ...prev, [e.target.name]: e.target.value}));

        if (formData.title.lenght === 0){
            setError("Title field Required.");
        return;
        }else{
            setError("");
        }

        if (formData.price.length ===0){
            setError("Price field Required.")
            return;
        }else{
            setError("");
        }

         if (formData.description.length ===0){
            setError("Description field Required.")
            return;
        }else{
            setError("");
        }

         if (formData.category.length ===0){
            setError("Category field Required.")
            return;
        }else{
            setError("");
        }

         if (formData.image.length ===0){
            setError("Image field Required.")
            return;
        }else{
            setError("");
        }
        console.log(formData);
    };

    const handleSubmit = async (e) =>{
       e.preventDefault();
       const res = await axios.post("https://fakestoreapi.com/products",formData);
     console.log(res);
     if(res.status==201){
        alert("product created successfully!")
     }
     
       console.log(formData);

    
    };

  return (
    <div className="grid place-items-center h-screen w-full">
        <form onSubmit={handleSubmit}
        className="w-120 p-4 shadow-2xl rounded-lg flex flex-col gap-4">
        
        <h1 className="text-4xl font-bold">Form</h1>

        <input
        value={formData.title}
        onChange={handleChange}
        type="text"
        name="title"
        placeholder="Enter your title"
        />

         <input
        value={formData.price}
        onChange={handleChange}
        type="text"
        name="price"
        placeholder="Enter the Price"
        />

         <input
        value={formData.description}
        onChange={handleChange}
        type="text"
        name="description"
        placeholder="Enter your description"
        />

         <input
        value={formData.category}
        onChange={handleChange}
        type="text"
        name="category"
        placeholder="Enter  your category"
        />

         <input
        onChange={handleChange}
        type="text"
        placeholder="Enter your image"
        />

        {error && <span className="text-red-500">{error}</span>}

        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold " type="submit">
            Submit  
        </button>

            
        </form>
      
    </div>
  )
}

export default PostAPIFetch;
