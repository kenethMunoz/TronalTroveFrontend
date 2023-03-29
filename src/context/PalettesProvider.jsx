import React, { createContext, useState } from "react";

export const PaletteContext = createContext(null);
function PalettesProvider({ children }) {
  const [savedPalettes, setSavedPalettes] = useState([]);
  const [createdPalettes, setcreatedPalettes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [paletteList, setPaletteList] = useState([]);
  const [totalPalettes, setTotalPalettes] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  return (
    <PaletteContext.Provider
      value={{
        savedPalettes,
        setSavedPalettes,
        createdPalettes,
        setcreatedPalettes,
        searchText,
        setSearchText,
        paletteList,
        setPaletteList,
        totalPalettes,
        setTotalPalettes,
        isSearching,
        setIsSearching,
      }}
    >
      {children}
    </PaletteContext.Provider>
  );
}

export default PalettesProvider;
