import React, { useContext } from "react";
import { PaletteContext } from "../context/PalettesProvider.jsx";
import { userContext } from "../context/UserProvider.jsx";
import PaletteCard from "../components/PaletteCard.jsx";
import Header from "../components/Header.jsx";
function CreatedPalettes() {
  const { createdPalettes } = useContext(PaletteContext);
  const { user } = useContext(userContext);
  return (
    <div>
      <Header />
      {createdPalettes.length === 0 ? (
        <p>No palettes to show</p>
      ) : (
        <div>
          <h1>Palettes created by {user.userName}</h1>
          {createdPalettes.map((palette) => (
            <PaletteCard key={palette._id} palette={palette} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CreatedPalettes;
