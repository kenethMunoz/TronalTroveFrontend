import { useState, createContext } from "react";
export const userContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [SignUpUserName, setSignUpUserName] = useState("");
  const [SignUpemail, setSignUpEmail] = useState("");
  const [SignUppassword, setSignUpPassword] = useState("");
  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        loginEmail,
        setLoginEmail,
        loginPassword,
        setLoginPassword,
        SignUpUserName,
        setSignUpUserName,
        SignUpemail,
        setSignUpEmail,
        SignUppassword,
        setSignUpPassword,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;
