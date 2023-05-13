import { create } from "zustand";

const k = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));

const useStore = create((set) => ({
  user: k,
  setUser: (t) => {
    set(() => ({ user: t }));
  },
  token: token,
  setToken: (t) => {
    set(() => ({ token: t }));
  },
}));

export default useStore;
