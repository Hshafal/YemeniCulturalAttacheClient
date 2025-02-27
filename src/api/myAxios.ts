import axios from "axios";

export const BASE_URL = "https://f3cea4d78b5e.vps.myjino.ru/api"

export const UPLOAD_URL = "https://f3cea4d78b5e.vps.myjino.ru/uploads"

// export const BASE_URL = import.meta.env.DEV
//   ? "http://localhost:5000/api"
//   : "https://f3cea4d78b5e.vps.myjino.ru/api";

// export const UPLOAD_URL = import.meta.env.DEV
//   ? "http://localhost:5000/uploads"
//   : "https://f3cea4d78b5e.vps.myjino.ru/uploads";

const myAxios = axios.create({
  baseURL: BASE_URL,
});

export default myAxios;
