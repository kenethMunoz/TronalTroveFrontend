import React, { useContext, useEffect, useState } from "react";
import { savePalette, unsavePalette, logIn } from "../api/User.api.js";
import { getSavedPalettes } from "../api/Palette.api.js";
import { userContext } from "../context/UserProvider.jsx";
import { PaletteContext } from "../context/PalettesProvider.jsx";

function PaletteCard({ palette }) {
  const { user, setUser } = useContext(userContext);
  const { setSavedPalettes } = useContext(PaletteContext);
  const [text, setText] = useState("");
  useEffect(() => {
    setText(
      Object.keys(user).length &&
        user.savedPalettes.some((id) => id === palette._id)
        ? "❌"
        : "❤️"
    );
  }, [user]);
  return (
    <div>
      <div>
        <ul>
          {palette.colors.map((color) => (
            <li key={color}>
              <p>{color}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>{palette.name}</h2>
        <button
          onClick={async () => {
            if (Object.values(user).length === 0) return; //poner mensaje para que el usuario se logguee
            if (user.savedPalettes.some((id) => id === palette._id)) {
              await unsavePalette(user.email, user.password, palette.name);
            } else {
              await savePalette(user.email, user.password, palette.name);
            }
            setUser(await logIn(user.email, user.password));
            setSavedPalettes(await getSavedPalettes(user));
          }}
        >
          {text}
        </button>
      </div>
    </div>
  );
}

export default PaletteCard;
