import axios from "axios";
import { TOKEN } from "../base-urls/base_urls";
import { encode } from "js-base64";

const req = axios.create({
  baseURL: TOKEN,
  headers: {
    Authorization: `Basic ${encode(
      `${import.meta.env.VITE_APP_CLIENT_ID}:${
        import.meta.env.VITE_APP_CLIENT_SECRET
      }`
    )}`,
    //   "Basic " +
    //   new Buffer(
    //     import.meta.env.VITE_APP_CLIENT_ID +
    //       ":" +
    //       import.meta.env.VITE_APP_CLIENT_ID
    //   ).toString("base64"),
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default req;
