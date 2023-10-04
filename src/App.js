import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
// import Nopage from "./components/Nopage";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Images from "./components/Images";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="Home" element={<Home />}>
            <Route path="Images" element={<Images />} />
          </Route>
          <Route path="Contact" element={<Contact />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="About" element={<About />} />
          {/* <Route path="#" element={<Nopage />} /> */}
          <Route path="Login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
