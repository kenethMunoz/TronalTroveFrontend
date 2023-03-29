import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userContext } from "../context/UserProvider.jsx";
import { PaletteContext } from "../context/PalettesProvider.jsx";
import { getPalettesByUser, getSavedPalettes } from "../api/Palette.api.js";

import { logIn } from "../api/User.api.js";

function LogIn() {
  const {
    loginEmail,
    loginPassword,
    setUser,
    setLoginEmail,
    setLoginPassword,
  } = useContext(userContext);
  const { setSavedPalettes, setcreatedPalettes, setNewestPalettes } =
    useContext(PaletteContext);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const user = await logIn(loginEmail, loginPassword);
    if (!user) return; // colocar mensaje error
    setUser(user);

    setcreatedPalettes(await getPalettesByUser(user));
    setSavedPalettes(await getSavedPalettes(user));

    navigate("/");
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="email"
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <input
          type="text"
          name="password"
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
        <button>Log in</button>
      </form>
      <p>
        <Link to={"/createAccount"}>Sign up</Link> here!
      </p>
    </div>
  );
}

export default LogIn;
