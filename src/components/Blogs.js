  import React, { useState, useEffect } from "react";
  import axios from "axios";
  const apidata = "https://fakestoreapi.com/products";

  const Blogs = () => {
    const [description, setdescription] = useState([]);
    useEffect(() => {
      async function getStoreData() {
        const response = await axios.get(apidata);
      //   console.log(response.data);
        setdescription(response.data);
      }
      getStoreData();
    }, []);

    return (
      <>
        {description.map((item) => {
          return (
            <div className="product">
              <div className="divcontent">
                <h4>{item.title}</h4>
                <img src={item.image} width="300" height="300"></img>
                <p>Price₹ {item.price}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  export default Blogs;
