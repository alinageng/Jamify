import axios from "axios";
// import {API_URL} from "../utils/tokens";

const request = axios.create({
  withCredentials: true,
})

const USER_API = `${process.env.REACT_APP_API_URL}/users`;

export const signIn = async (credentials) => {
  const response = await request.post(`${USER_API}/signin`, credentials);
  return response.data;
}

export const account = async () => {
  const response = await request.post(`${USER_API}/account`);
  return response.data;
};