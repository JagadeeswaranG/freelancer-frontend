import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { listFreelancer } from "../api/clients";

function View_freelancer() {
  const params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  useEffect(() => {
    getFreelancer();
  }, []);

  async function getFreelancer() {
    try {
      let projectsData = await listFreelancer(params.cId, params._id);
      if (projectsData.data.length !== 0) {
        setUser(projectsData.data[0].freelancer);
      } else {
        alert("No Freelancer Applied...");
        navigate(`/client_portal/viewProjects/${params.cId}`);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  }
  console.log(user);
  return (
    <div class="container-fluid">
      <h1 class="h3 mb-4 text-gray-800">Freelancers Applied</h1>
      <div className="row">
        {user.map((item) => {
          return (
            <div className="col-lg-4">
              <div class="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
                <div class="card-header">Freelancer ID: {item._id}</div>
                <div class="card-body text-danger">
                  <h5 class="card-title">Name : {item.name}</h5>
                  <p class="card-text">Email : {item.email}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default View_freelancer;
