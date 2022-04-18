import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
