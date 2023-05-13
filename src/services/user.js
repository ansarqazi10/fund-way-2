import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default class {
  static get = async (obj) => {
    let result = { data: null, error: null };

    await axios
      .post(`${process.env.REACT_APP_API_URL}/users/all`, obj)
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

  static login = async (obj) => {
    let result = { data: null, error: null };
    await axios
      .post(`${process.env.REACT_APP_API_URL}/users/login`, obj)
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

  static signup = async (data) => {
    let result = { data: null, error: null };
    await axios
      .post(`${process.env.REACT_APP_API_URL}/users/signup`, data)
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

  static forgotPassword = async (email) => {
    let result = { data: null, error: null };
    await axios
      .post(`${process.env.REACT_APP_API_URL}/users/forgot-password`, {
        email: email,
      })
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

  static resetPassword = async (token, password) => {
    let result = { data: null, error: null };
    await axios
      .post(`${process.env.REACT_APP_API_URL}/users/reset-password`, {
        token: token,
        newPassword: password,
      })
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
