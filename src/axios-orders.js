import axios from "axios";

const instance = axios.create({
  baseURL: "https://aismai-burger.firebaseio.com/"
});

export default instance;
