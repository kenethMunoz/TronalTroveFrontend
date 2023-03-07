import "./App.css";
import UserProvider from "./context/UserProvider.jsx";
import Home from "./pages/Home.jsx";
import Palette from "./pages/Palette.jsx";
import User from "./pages/User.jsx";
import About from "./pages/About.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/palette" element={<Palette />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
