import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchAPI = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        {data.map((item, index) => {
          return (
            <div key={index} className="border p-2 h-[15rem] ">
              <h1 className="text-2xl text-center">
                {item.title.slice(0, 28)}...
              </h1>
              <p className="text-justify">{item.body.slice(0, 65)}..</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FetchAPI;