import axios from "axios";

const request = axios.create({
  withCredentials: true,
})

const API_URL =  "http://localhost:4000/api"; // TODO REMOVE HARDCODED
const POSTS_API = `${API_URL}/posts`;

export const getAllPosts = async () => {
  const response = await request.get(`${POSTS_API}`);
  return response.data;
}

export const submitNewPost = async (newPost) => {
  const response = await request.post(`${POSTS_API}`, newPost);
  return response.data;
}

export const getPostsComments = async (postId) => {
  const response = await request.get(`${POSTS_API}/${postId}/comments`)
  return response;
}

export const submitNewComment = async (newComment) => {
  const status = await request.post(`${API_URL}/comments`, newComment)
  return status;
}

export const getPostById = async (postId) => {
  const response = await request.get(`${POSTS_API}/${postId}`)
  return response;
}

export const getPostsByUserId = async (userId) => {
  const response = await request.get(`${POSTS_API}/by/${userId}`)
  return response;
}

export const getUsersHomepagePosts = async (userId) => {
  const response = await request.get(`${POSTS_API}/homepage/${userId}`)
  return response.data;
}