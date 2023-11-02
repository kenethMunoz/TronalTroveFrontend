import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Dropdown } from "flowbite-react";
import { userContext } from "../context/UserProvider.jsx";
function DropDown() {
  const { user, setUser } = useContext(userContext);
  return (
    <div className="prueba">
      <Dropdown label={user.userName} dismissOnClick={false} className="">
        <Dropdown.Header>
          <span className="block text-sm">{user.userName}</span>
          <span className="block truncate text-sm font-medium">
            {user.email}
          </span>
        </Dropdown.Header>
        <Dropdown.Item>
          <Link
            to={"/palette"}
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            create a palette
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            to={"/savedPalettes"}
          >
            Saved palettes
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            to={"/createdpalettes"}
          >
            Created palettes
          </Link>
        </Dropdown.Item>
        <Dropdown.Divider />

        <Dropdown.Item>
          <Link
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            to={"/login"}
            onClick={(e) => {
              setUser(null);
            }}
          >
            LogOut
          </Link>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default DropDown;
