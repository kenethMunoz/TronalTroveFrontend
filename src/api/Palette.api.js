import axios from "axios";

export const createPalette = async (name, author, colors) => {
  try {
    const response = await axios.post("http://localhost:4000/palettes/create", {
      name,
      author,
      colors,
    });
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getPalettesByUser = async (author) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/palettes/getByUser",
      author
    );
    return response.data;
  } catch (error) {
    console.log("error capturado: ", error);
  }
};

export const getSavedPalettes = async (author) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/palettes/getSavedPalettes",
      author
    );
    return response.data;
  } catch (error) {
    console.log("error capturado: ", error);
  }
};

export const getNewest = async (min, max) => {
  try {
    const response = await axios.post("http://localhost:4000/palettes/getAll", {
      min,
      max,
    });
    return response.data;
  } catch (error) {
    console.log("error capturado: ", error);
  }
};

export const getTotalPalettes = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/palettes/totalPalettes"
    );

    return response.data;
  } catch (error) {
    console.log("error capturado: ", error);
  }
};

export const search = async (text) => {
  try {
    const response = await axios.post("http://localhost:4000/palettes/search", {
      text: text,
    });

    return response.data;
  } catch (error) {
    console.log("error capturado: ", error);
  }
};
