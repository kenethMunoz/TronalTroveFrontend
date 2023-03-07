import { useState, useContext, createContext, Children } from "react";
export const userContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return <userContext.Provider>{children}</userContext.Provider>;
}

export default UserProvider;
