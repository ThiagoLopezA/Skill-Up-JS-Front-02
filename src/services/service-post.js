
import axios from "axios";
import.meta.env.URL_API
//const {token} = JSON.parse(localStorage.getItem('token'))


export function requestPost (token, path, data) {
    
        return axios
          .post(URL_API + path, data, {
            headers: { authorization: `Bearer ${token}` },
          })
          .then((response) => response)
          .catch((error) => {
            return error;
          });
      
}
