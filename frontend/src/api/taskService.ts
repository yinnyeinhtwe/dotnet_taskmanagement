import axios from 'axios';

const API_BASE_URL = 'http://localhost:5296';

export interface Task {
  id: number;
  title: string;
  description?: string;
}

export interface CreateTaskRequest {
  title: string;
  description?: string;
}

export const getAllTasks = async (): Promise<Task[]> => {
  const response = await axios.get(`${API_BASE_URL}/tasks`);
  return response.data;
};

export const createTask = async (task: CreateTaskRequest): Promise<Task> => {
  const response = await axios.post(`${API_BASE_URL}/tasks`, task);
  return response.data;
};