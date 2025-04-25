// client/lib/api.js
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchMessages = async () => {
  const response = await axios.get(`${API_URL}/messages`);
  return response.data;
};

export const sendMessage = async (username, content) => {
  const response = await axios.post(`${API_URL}/messages`, { username, content });
  return response.data;
};
