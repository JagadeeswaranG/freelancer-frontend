import axios from "axios";
import { config } from "../config/Config";

// List All projects for client
export async function listProjects(cId) {
  return axios.get(`${config.api}/api/clients/all_projects/${cId}`, {
    headers: {
      Authorization: localStorage.getItem(`${config.storage_key}`),
    },
  });
}

// List All Freelancer for client
export async function listFreelancer(cId, _id) {
  return axios.get(`${config.api}/api/clients/view_project/${cId}/${_id}`, {
    headers: {
      Authorization: localStorage.getItem(`${config.storage_key}`),
    },
  });
}

// Post the Project
export async function postProject(cId, data) {
  return await axios.post(`${config.api}/api/clients/post_project/${cId}`, data, {
    headers: {
      Authorization: localStorage.getItem(`${config.storage_key}`),
    },
  });
}
