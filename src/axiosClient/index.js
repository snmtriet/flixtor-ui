import axios from "axios";

export default axios.create({
  baseURL: "https://flixtor-api.herokuapp.com",
});
