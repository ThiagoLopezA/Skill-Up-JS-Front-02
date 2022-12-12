import axios from "axios";
const httpRequest = (method, endpoint, data, headers = {}) => {
  const config = {
    headers,
  };

  const { token } = JSON.parse(localStorage.getItem("token")) || "";

  if (token) config.headers.Authorization = `Bearer ${token}`;

  config.method = method;

  config.url = import.meta.env.VITE_API_URL + endpoint;
  
  if (data) config.data = data;

  return new Promise((resolve, reject) => {
    axios(config)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};

export const getRequest = (endpoint, headers) =>
  httpRequest("get", endpoint, null, headers);


export const postRequest = (endpoint, data, headers) =>
  httpRequest("post", endpoint, data, headers);

