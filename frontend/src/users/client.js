import axios from "axios";

const request = axios.create({
  withCredentials: true,
})

const API_URL =  "http://localhost:4000/api"; // TODO REMOVE HARDCODED
const USER_API = `${API_URL}/users`;
const FOLLOW_API = `${API_URL}/follow`;

export const signIn = async (credentials) => {
  const response = await request.post(`${USER_API}/signin`, credentials);
  return response.data;
}

export const signout = async () => {
  const response = await request.post(`${USER_API}/signout`);
  return response.data;
};

export const account = async () => {
  const response = await request.post(`${USER_API}/account`);
  return response.data;
};

export const getUserInfo = async(userId) => {
  const response = await request.get(`${USER_API}/${userId}`)
  return response.data;
}

export const getNumFollowers = async(userId) => {
  const response = await request.get(`${FOLLOW_API}/${userId}/num_followers`)
  return response.data;
}

export const getNumFollowing = async(userId) => {
  const response = await request.get(`${FOLLOW_API}/${userId}/num_following`)
  return response.data;
}

export const getFollowers = async(userId) => {
  const response = await request.get(`${FOLLOW_API}/${userId}/followers`)
  return response.data;
}

export const getFollowing = async(userId) => {
  const response = await request.get(`${FOLLOW_API}/${userId}/following`)
  return response.data;
}

export const signup = async (credentials) => {
  const response = await axios.post(
    `${USER_API}/signup`, credentials);
  return response.data;
};
