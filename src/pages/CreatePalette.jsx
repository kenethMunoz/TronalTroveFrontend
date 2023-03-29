import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header.jsx";
import { userContext } from "../context/UserProvider.jsx";
import { createPalette } from "../api/Palette.api.js";

function CreatePalette() {
  const [name, setName] = useState("");
  const [colors, setColors] = useState([]);
  const [numberColors, setNumberColors] = useState(1);
  const { user } = useContext(userContext);
  const printIputs = () => {
    const colorInputs = [
      <input
        type="text"
        maxLength={6}
        key={1}
        placeholder={`Color ${1}`}
        onChange={(e) => {
          setColors(["#" + e.target.value]);
        }}
        pattern="[a-zA-Z0-9-]+"
      />,
    ];
    for (let i = 2; i <= numberColors; i++) {
      colorInputs.push(
        <input
          type="text"
          maxLength={6}
          key={i}
          placeholder={`Color ${i}`}
          onChange={(e) => {
            colors[i - 1] = "#" + e.target.value;
          }}
          pattern="[a-zA-Z0-9-]+"
        />
      );
    }
    return colorInputs;
  };
  const checkInput = async (e) => {
    e.preventDefault();

    if (colors.length < 1) return; // mostrar mensaje de meter colors para crear la paleta

    if (!user) return; // mostrar mensaje de logearse para poder crear un palette;
    if (!name) return; // mostrar mensaje para colocar un nombre para la paleta;

    const newPalette = await createPalette(
      name,
      user,
      colors.filter((color) => {
        if (color && color.length !== 0) return color;
      })
    );
  };
  return (
    <div>
      <Header />

      <form onSubmit={checkInput}>
        <input
          type="text"
          name="name"
          placeholder="Palette name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {printIputs()}
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setNumberColors(numberColors + 1);
            }}
          >
            add color
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (numberColors >= 2) setNumberColors(numberColors - 1);
            }}
          >
            remove color
          </button>
        </div>
        <button type="submit">Create palette</button>
      </form>
    </div>
  );
}

export default CreatePalette;
