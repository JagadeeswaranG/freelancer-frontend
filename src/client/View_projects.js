import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { listProjects } from "../api/clients";

function View_projects() {
  const params = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    try {
      let projectsData = await listProjects(params.cId);
      setProjects(projectsData.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  return (
    <div class="container-fluid">
      <h1 class="h3 mb-4 text-gray-800">My Projects</h1>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <Link
            to={`/client_portal/post_Project/${params.cId}`}
            type="button"
            class="btn btn-outline-primary"
          >
            Post New Project
          </Link>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Type</th>
                  <th>Duration</th>
                  <th>Freelancer Applied</th>
                  <th>Freelancer's</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.projectName}</td>
                      <td>{item.type}</td>
                      <td>{item.duration}</td>
                      <td>{item.freelancer.length}</td>
                      <td>
                        <Link to={`/client_portal/viewFreelancers/${item.cId}/${item._id}`} type="button" class="btn btn-success">
                          View
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default View_projects;
