import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/cred";
import { config } from "../config/Config";

// User Login
function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let error = {};
      if (!values.email) {
        error.email = "*Enter Registered Email Id";
      }
      if (!values.password) {
        error.password = "*Required";
      }
      return error;
    },
    onSubmit: async (values) => {
      try {
        let logindata = await login(values);

        // Set login detials to LocalStorage
        localStorage.setItem(`${config.storage_key}`, logindata.data.token);
        localStorage.setItem(`${config.storage_key1}`, logindata.data.uNm);
        localStorage.setItem(`${config.storage_key2}`, logindata.data.uId);

        // Login access to Client Portal
        if (logindata.data.role === "CLIENT") {
          navigate(`/client_portal/viewProjects/${logindata.data.uId}`);
        }

        // Login access to Freelancer Portal
        if (logindata.data.role === "FREELANCER") {
          navigate(`/freelancer_portal/all_Projects/${logindata.data.uId}`);
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });
  return (
    <main>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="card shadow-lg border-0 rounded-lg mt-5">
              <div
                class="card-header"
                style={{ backgroundColor: "rgb(61, 215, 229)" }}
              >
                <h3 class="text-center font-weight-light my-4">
                  <b>Login</b>{" "}
                </h3>
              </div>
              <div class="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div class="form-floating mb-3">
                    <label for="inputEmail">Email address</label>
                    <input
                      class="form-control"
                      id="inputEmail"
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.email}
                      </span>
                    ) : null}
                    
                  </div>
                  <div class="form-floating mb-3">
                    <label for="inputPassword">Password</label>
                    <input
                      class="form-control"
                      id="inputPassword"
                      type="password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.password}
                      </span>
                    ) : null}
                    
                  </div>
                  <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                    <a class="small"> </a>

                    <input
                      type={"submit"}
                      value={"Login"}
                      class="btn btn-info"
                    />
                  </div>
                </form>
              </div>
              <div class="card-footer text-center py-3">
                <div class="small">
                  <Link to={"/signUp"}>Need an account? Sign up!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
