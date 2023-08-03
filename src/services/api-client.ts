import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5babaebc89d740129aed62f935084ac6",
  },
});
