import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Separator from "./Separator.jsx";
import { userContext } from "../context/UserProvider.jsx";
function DropDown() {
  const { user, setUser } = useContext(userContext);
  const [visibility, setVisibility] = useState(false);
  const toggleMenu = () => {
    setVisibility(!visibility);
  };
  return (
    <div>
      <div className="relative">
        <button
          id="dropdownButton"
          className={`${
            visibility ? "bg-lightPurple text-white" : "bg-white text-black"
          } hover:bg-lightPurple  transition duration-300 ease-in-out px-6 py-3 rounded-xl `}
          onClick={toggleMenu}
        >
          {user.userName}
        </button>
        {visibility && (
          <div
            id="dropdownBox"
            className=" bg-white absolute top-16 right-0 w-56 rounded-xl animate-fadeInUp duration-1000"
          >
            <div>
              <Link
                to={"/user"}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <p className="block text-sm">{user.userName}</p>
                <p className="block truncate text-sm font-medium">
                  {user.email}
                </p>
              </Link>
            </div>
            <Separator />
            <div>
              <Link
                to={"/palette"}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                create a palette
              </Link>
            </div>
            <div>
              <Link
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                to={"/savedPalettes"}
              >
                Saved palettes
              </Link>
            </div>
            <div>
              <Link
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                to={"/createdpalettes"}
              >
                Created palettes
              </Link>
            </div>
            <div />
            <Separator />

            <div>
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                to={"/login"}
                onClick={(e) => {
                  setUser(null);
                }}
              >
                LogOut
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropDown;
