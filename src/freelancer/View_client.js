import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { viewClient } from "../api/freelancer";

function View_client() {
  const params = useParams();
  const [client, setClient] = useState([]); 

  useEffect(() => {
    getClient();
  }, []);

  async function getClient() {
    try {
      let clientData = await viewClient(params.fId, params.pId);
      setClient(clientData.data);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  }

  return (
    <div class="container-fluid">
      {client.map((item) => {
        return (
          <div class="card">
            <div class="card-header">
              Project ID: {item._id} <br />
              {item.projectName}
            </div>
            <div class="card-body">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 mt-2">
                    <h5 class="card-title">Category:</h5>
                    <p class="card-text">{item.type}</p>
                  </div>
                  <div className="col-lg-6 mt-2">
                    <h5 class="card-title">Client Details:</h5>
                    <p class="card-text">Client Name : {item.c_name}</p>
                    <p class="card-text">Client Email : {item.c_email}</p>
                  </div>
                  <div className="col-lg-6 mt-4">
                    <h5 class="card-title">programming Language(Major):</h5>
                    <p class="card-text">{item.prg_language}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 mt-4">
                    <h5 class="card-title">About - Project:</h5>
                    <p class="card-text">{item.about}</p>
                  </div>
                  <div className="col-lg-6 mt-4">
                    <h5 class="card-title">Project Duration:</h5>
                    <p class="card-text">{item.duration}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div class="card-footer ">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6"></div>
                  <div className="col-lg-6 text-right">
                    <Link
                      to={`/freelancer_portal/apply_Project/${params.fId}/${item._id}`}
                      class= "btn btn-primary"
                    >
                     Apply
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default View_client;
