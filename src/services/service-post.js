
import axios from "axios";
import.meta.env.VITE_API
//const {token} = JSON.parse(localStorage.getItem('token'))


export function requestPost (token, path, data) {
    
        return axios
          .post(VITE_API + path, data, {
            headers: { authorization: `Bearer ${token}` },
          })
          .then((response) => response)
          .catch((error) => {
            return error;
          });
      
}
