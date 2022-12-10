import axios from "axios";
import.meta.env.VITE_API

export function requestGet(path, data) {
    return async function () {
      try {
        var json = await axios.get(VITE_API + path + data);
        return json.data;
      } catch (error) {
        return error;
      }
    };
  }