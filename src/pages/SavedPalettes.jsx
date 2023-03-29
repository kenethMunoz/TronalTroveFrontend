import React, { useContext } from "react";
import { PaletteContext } from "../context/PalettesProvider.jsx";
import PaletteCard from "../components/PaletteCard.jsx";
import Header from "../components/Header.jsx";

function SavedPalettes() {
  const { savedPalettes } = useContext(PaletteContext);
  return (
    <div>
      <Header />
      {savedPalettes.length === 0 ? (
        <h2>No palettes to show</h2>
      ) : (
        <div>
          <h1>Palettes saved</h1>
          {savedPalettes.map((palette) => (
            <PaletteCard key={palette._id} palette={palette} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedPalettes;
