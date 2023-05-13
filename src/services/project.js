import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default class {
  static get = async (obj) => {
    let result = { data: null, error: null };

    await axios
      .post(`${process.env.REACT_APP_API_URL}/projects/all`, obj)
      .then((resp) => {
        if (resp.status === 200) {
          result.data = resp.data;
        }
      })
      .catch((err) => {
        result.error = err.response.data;
      });

    return result;
  };

  static getByUserId = async (userId) => {
    let result = { data: null, error: null };

    await axios
      .get(`${process.env.REACT_APP_API_URL}/projects/user/${userId}`)
      .then((resp) => {
        if (resp.status === 200) {
          result.data = resp.data;
        }
      })
      .catch((err) => {
        result.error = err.response.data;
      });

    return result;
  };

  static create = async (data) => {
    let result = { data: null, error: null };

    await axios
      .post(`${process.env.REACT_APP_API_URL}/projects/create`, data)
      .then((resp) => {
        if (resp.status === 200) {
          result.data = resp.data;
        }
      })
      .catch((err) => {
        result.error = err.response.data;
      });

    return result;
  };
}
