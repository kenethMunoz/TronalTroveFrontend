import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../api/Palette.api.js";
import { userContext } from "../context/UserProvider.jsx";
import { PaletteContext } from "../context/PalettesProvider.jsx";

function Header() {
  const { user, setUser } = useContext(userContext);
  const { setIsSearching, setPaletteList } = useContext(PaletteContext);
  const [text, setText] = useState("");
  return (
    <div>
      <Link
        rel="stylesheet"
        to={"/"}
        onClick={() => {
          setIsSearching(false);
        }}
      >
        TonalTrove
      </Link>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (text === "") {
            return; // colocar mensaje de que no hay texto para buscar
          }

          setIsSearching(true);
          //colocar efecto de cargando aqui
          const response = await search(text);
          // quitar el icono de cargando aqui
          setPaletteList(response);
        }}
      >
        <input
          type="text"
          placeholder="Palette name"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button>Search</button>
      </form>
      <ul>
        <li>
          <Link to={"/palette"}>create a palette</Link>
        </li>

        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link
            to={!user || Object.keys(user).length !== 0 ? "/user" : "/login"}
          >
            {Object.keys(user).length !== 0 ? user.userName : "Log in"}
          </Link>
          <div>
            <Link rel="stylesheet" to={"/savedPalettes"}>
              Saved palettes
            </Link>
            <Link rel="stylesheet" to={"/createdpalettes"}>
              Created palettes
            </Link>
            <Link
              to={"/login"}
              onClick={(e) => {
                setUser(null);
              }}
            >
              LogOut
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Header;
