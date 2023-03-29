import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userContext } from "../context/UserProvider.jsx";
import { createAccount } from "../api/User.api.js";

function CreateAccount() {
  const {
    SignUpUserName,
    setSignUpUserName,
    SignUpemail,
    setSignUpEmail,
    SignUppassword,
    setSignUpPassword,
  } = useContext(userContext);

  const navigate = useNavigate();
  const signUp = async (e) => {
    e.preventDefault();
    const response = await createAccount(
      SignUpUserName,
      SignUpemail,
      SignUppassword
    );
    if (!response) return; // colocar aqui un mensaje que indique que no se pudo crear el usuario
    navigate("/login");
    //poner un popup para avisar que se creo correctamente la cuenta
  };

  return (
    <div>
      <form onSubmit={signUp}>
        <input
          type="text"
          name="userName"
          onChange={(e) => {
            setSignUpUserName(e.target.value);
          }}
        />
        <input
          type="text"
          name="email"
          onChange={(e) => {
            setSignUpEmail(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setSignUpPassword(e.target.value);
          }}
        />
        <button>Sign up</button>
      </form>
      <p>
        <Link to={"/login"}>Sign In</Link> here!
      </p>
    </div>
  );
}

export default CreateAccount;
