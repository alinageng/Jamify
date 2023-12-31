import axios from "axios";

const request = axios.create({
  withCredentials: true,
})

const USER_API = `${process.env.REACT_APP_API_URL}/users`;
const FOLLOW_API = `${process.env.REACT_APP_API_URL}/follow`;

export const findAllUsers = async () => {
  const response = await axios.get(`${USER_API}`);
  return response.data;
};

export const deleteUser = async (user) => {
  const response = await axios.delete(
    `${USER_API}/${user._id}`);
  return response.data;
};



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

export const signup = async (credentials) => {
  const response = await axios.post(
    `${USER_API}/register`, credentials);
  return response.data;
};

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

export const isFollowing = async (followedId, followerId) => {
  const response = await axios.get(`${FOLLOW_API}/${followedId}/${followerId}`);
  console.log("is following: ", response);
  return response.data;
}

export const createFollow = async (follow) => {
  const response = await axios.post(`${FOLLOW_API}`, follow);
  return response.status;
}

export const deleteFollow = async (followedId, followerId) => {
  console.log("body for deleteFollow: ", followedId, followerId);
  const response = await axios.delete(`${FOLLOW_API}/${followedId}/${followerId}`);
  return response.status;
}

export const updateUserInfo = async (userId, userInfo) => {
  const response = await axios.put(
    `${USER_API}/${userId}`, userInfo);
  return response.data;
};


// export const findUserByUsername = async (username) => {
//   const response = await request.get(`${POSTS_API}/homepage/${userId}`)
//   return response.data;
// }
