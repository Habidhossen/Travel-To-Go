import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
