import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../api/Palette.api.js";
import { userContext } from "../context/UserProvider.jsx";
import { PaletteContext } from "../context/PalettesProvider.jsx";
import NavMenu from "./NavMenu";
import DropDown from "./DropDown.jsx";

function Header() {
  const { user, setUser } = useContext(userContext);
  const { setIsSearching, setPaletteList } = useContext(PaletteContext);
  const [text, setText] = useState("");
  return (
    <div className="bg-blue-500 w-full flex justify-center  ">
      <div className="bg-orange-600 p-10 container flex justify-between items-center">
        {/* home */}
        <div className="bg-yellow-500">
          <Link
            rel="stylesheet"
            to={"/"}
            onClick={() => {
              setIsSearching(false);
            }}
          >
            TonalTrove
          </Link>
        </div>
        {/* search */}
        <div className="bg-red-600">
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
        </div>
        {/* nav Menu */}
        <div className="header">
          {user && Object.keys(user).length === 0 ? <NavMenu /> : <DropDown />}
        </div>
      </div>
    </div>
  );
}

export default Header;
