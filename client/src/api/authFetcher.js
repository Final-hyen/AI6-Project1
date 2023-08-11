import { axiosClient } from "../utils/axiosClient";

export const signUp = async (email, password, name) => {
  return await axiosClient.post(
    "/signup",
    { email: email, password: password, name: name },
    { withCredentails: true }
  );
};

export const signIn = async (email, password) => {
  return await axiosClient.post(
    "/signin",
    { email: email, password: password },
    { withCredentials: true }
  );
};
