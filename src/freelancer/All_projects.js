import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { listAllProjects } from "../api/freelancer";

function All_projects() {
  const params = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    try {
      let projectsData = await listAllProjects(params.fId);
      setProjects(projectsData.data);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  }
  return (
    <div class="container-fluid">
      <h1 class="h3 mb-4 text-gray-800">All Clients Project</h1>
      <div class="card shadow mb-4">
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
                  <th>Pro - language</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.projectName}</td>
                      <td>{item.type}</td>
                      <td>{item.prg_language}</td>
                      <td>
                        <Link
                            to={`/freelancer_portal/view_Project/${params.fId}/${item._id}`}
                          type="button"
                          class="btn btn-success"
                        >
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

export default All_projects;
