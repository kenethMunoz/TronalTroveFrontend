import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/UserProvider.jsx";

function Header() {
  const user = useContext(userContext);

  return (
    <div>
      <Link rel="stylesheet" to={"/"}>
        TonalTrove
      </Link>
      <form action="">
        <input type="text" />
        <button>Search</button>
      </form>
      <ul>
        <li>
          <Link to={"/palette"}>create a palette</Link>
        </li>
        <li>
          <Link to={"/user"}>{user ? user.userName : "Log in"}</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
