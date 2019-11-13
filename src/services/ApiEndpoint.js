import axios from "axios";
import config from "../config";

export default class ApiEndpoint {
  getClient() {
    const clientConfig = {
      baseURL: config.endpoint
    };

    clientConfig.headers = {
      "Access-Control-Max-Age": 600
    };

    return axios.create(clientConfig);
  }
}
