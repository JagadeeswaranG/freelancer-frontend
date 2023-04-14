import axios from "axios";
import { config } from "../config/Config";

// List All projects for Freelancer
export async function listAllProjects(fId) {
  return axios.get(`${config.api}/api/freelancer/projects/${fId}`, {
    headers: {
      Authorization: localStorage.getItem(`${config.storage_key}`),
    },
  });
}

// View project and it's Client details for Freelancer
export async function viewClient(fId, pId) {
  return await axios.get(
    `${config.api}/api/freelancer/view_project/${fId}/${pId}`,
    {
      headers: {
        Authorization: localStorage.getItem(`${config.storage_key}`),
      },
    }
  );
}

// Apply the project by freelancer
export async function applyProject(fId, pId, data) {
  return await axios.put(
    `${config.api}/api/freelancer/apply_project/${fId}/${pId}`,
    data,
    {
      headers: {
        Authorization: localStorage.getItem(`${config.storage_key}`),
      },
    }
  );
}
