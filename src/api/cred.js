import axios from "axios";
import { config } from "../config/Config";


// User Registration
export async function register(cred) {
  return await axios.post(`${config.api}/api/userData/register`, cred);
}

// User login
export async function login(cred) {
  return await axios.post(`${config.api}/api/userData/login`, cred);
}