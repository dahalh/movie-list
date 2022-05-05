import axios from "axios";

const apiEp = "https://www.omdbapi.com/?apikey=4c98002d&";

export const fetchMovie = (title) => {
  try {
    const response = axios.get(apiEp + "t=" + title);
    return response;
  } catch (error) {
    return error.message;
  }
};
