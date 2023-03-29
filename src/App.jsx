import UserProvider from "./context/UserProvider.jsx";
import Home from "./pages/Home.jsx";
import CreatePalette from "./pages/CreatePalette.jsx";
import User from "./pages/User.jsx";
import About from "./pages/About.jsx";
import LogIn from "./pages/LogIn.jsx";
import CreateAccount from "./pages/CreateAccount.jsx";
import CreatedPalettes from "./pages/CreatedPalettes.jsx";
import PaletteProvider from "./context/PalettesProvider.jsx";
import SavedPalettes from "./pages/SavedPalettes.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <PaletteProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/palette" element={<CreatePalette />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/createAccount" element={<CreateAccount />} />
            <Route path="/createdPalettes" element={<CreatedPalettes />} />
            <Route path="/savedPalettes" element={<SavedPalettes />} />
          </Routes>
        </BrowserRouter>
      </PaletteProvider>
    </UserProvider>
  );
}

export default App;
