import React from "react";
import PaletteCard from "./PaletteCard.jsx";

function PaletteList({ palettes }) {
  return (
    <div>
      {palettes.map((palette) => (
        <PaletteCard key={palette._id} palette={palette} />
      ))}
    </div>
  );
}

export default PaletteList;
