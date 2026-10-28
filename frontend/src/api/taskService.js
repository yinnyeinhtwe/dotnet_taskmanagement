import axios from 'axios';

// Backend ၏ Port အမှန် (5296) သို့ ချိတ်ဆက်ရန်
const API_BASE_URL = 'http://localhost:5296';

export const getAllTasks = async () => {
  const response = await axios.get(`${API_BASE_URL}/tasks`);
  return response.data;
};

export const getTaskById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/tasks/${id}`);
  return response.data;
};

export const createTask = async (taskRequest) => {
  const response = await axios.post(`${API_BASE_URL}/tasks`, taskRequest);
  return response.data;
};