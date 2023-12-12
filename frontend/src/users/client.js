import axios from "axios";

const request = axios.create({
  withCredentials: true,
})

const API_URL =  "http://localhost:4000/api"; // TODO REMOVE HARDCODED
const USER_API = `${API_URL}/users`;

export const signIn = async (credentials) => {
  const response = await request.post(`${USER_API}/signin`, credentials);
  return response.data;
}

export const signout = async () => {
  console.log("client signout start")
  const response = await request.post(`${USER_API}/signout`);
  // const response = await request.post(`http://localhost:4000/api/users/signout`);
  console.log("client signout end")
  return response.data;
};

export const account = async () => {
  const response = await request.post(`${USER_API}/account`);
  return response.data;
};