import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

export const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData);
  return response.data;
};

export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const updateTaskStatus = async (id, status) => {
  const response = await axios.patch(`${API_URL}/${id}`, { status });
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};