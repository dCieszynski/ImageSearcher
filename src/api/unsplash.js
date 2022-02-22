import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID cwKAhFXCOekPaAb3E9aP-uqCDJDBDPzwj4Bc_lQ2KsM",
  },
});
