import axios from "axios";

const NEWURL = "https://randomuser.me/api/?results=200&nat=us"

export default {
  search: function(query) {
    return axios.get(NEWURL);
  }
};
