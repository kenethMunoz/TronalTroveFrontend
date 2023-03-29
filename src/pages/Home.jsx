import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import { getNewest, getTotalPalettes } from "../api/Palette.api.js";
import PaletteList from "../components/PaletteList.jsx";
import { PaletteContext } from "../context/PalettesProvider.jsx";
function Home() {
  const {
    paletteList,
    setPaletteList,
    setTotalPalettes,
    isSearching,
    setIsSearching,
  } = useContext(PaletteContext);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchPalettes = async () => {
      setTotalPalettes(await getTotalPalettes());
      if (!isSearching) {
        setPaletteList(await getNewest(page * 10, page * 20));
      }
    };
    fetchPalettes();
  }, [page, isSearching]);
  return (
    <div>
      <Header />
      <main>
        {isSearching ? (
          <div>
            <h2>These are the results that match your search :</h2>
            <div>
              {paletteList ? (
                <PaletteList palettes={paletteList} />
              ) : (
                <p>No palettes to show</p>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h1>Newest palettes</h1>
            <PaletteList palettes={paletteList} />
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
