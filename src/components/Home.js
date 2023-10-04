import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="Images">
        <button>show</button>
      </Link>
      <Outlet />
    </div>
  );
};

export default Home;
