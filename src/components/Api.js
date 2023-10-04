import axios from "axios";
import React from "react";

const Api = () => {
  const [posts, setposts] = useState([]);
  useEffcet(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
    });
  });
  return(
  <div>
      {posts.map((value) =>
      console.log(value))}
    </div>
  )
};

export default Api;
