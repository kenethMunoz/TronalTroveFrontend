import axios from "axios";
export const logIn = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:4000/users/login", {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.log("null?");
    return null;
  }
};

export const createAccount = async (userName, email, password) => {
  try {
    const response = await axios.post("http://localhost:4000/users/create", {
      userName,
      email,
      password,
    });
    console.log(response);

    return response.data;
  } catch (error) {
    return null;
  }
};

export const savePalette = async (email, password, name) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/users/savePalette",
      { email, password, name }
    );
    return response.data;
  } catch (error) {
    console.log("error capturado: ", error);
  }
};

export const unsavePalette = async (email, password, name) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/users/unsavePalette",
      { email, password, name }
    );
    return response.data;
  } catch (error) {
    console.log("error capturado: ", error);
  }
};
