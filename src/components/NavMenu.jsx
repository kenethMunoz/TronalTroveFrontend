import React from "react";
import { useContext, useState, useEffect } from "react";
import DropDown from "./DropDown.jsx";

import { Link } from "react-router-dom";
import { userContext } from "../context/UserProvider.jsx";

function navMenu() {
  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      window.location.reload();
    }
  }, [user]);

  return (
    <Link
      rel="stylesheet"
      to={"/login"}
      className="bg-white hover:bg-lightPurple text-black transition duration-300 ease-in-out px-6 py-3 rounded"
    >
      Loggin
    </Link>
  );
}

export default navMenu;
//text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
