import { useFormik } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postProject } from "../api/clients";

function Post_project() {
  const params = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      projectName: "",
      type: "",
      prg_language: "",
      about: "",
      duration: "",
    },
    // Form Validation
    validate: (values) => {
      let error = {};

      if (!values.projectName) {
        error.projectName = "*Enter your Project name/title";
      }
      if (!values.type) {
        error.type = "*Select the category";
      }
      if (!values.prg_language) {
        error.prg_language = "*Required";
      }

      if (!values.about) {
        error.about = "*Required";
      }
      if (!values.duration) {
        error.duration = "*Enter the duration - (EX : 6 Months)";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        let projectCreate = await postProject(params.cId, values);
        alert(projectCreate.data.message);
        navigate(`/client_portal/viewProjects/${params.cId}`);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });
  return (
    <div class="container-fluid">
      <h3>Post Your Project Here ...</h3>
      <hr />
      <form onSubmit={formik.handleSubmit}>
        <div class="form-row mt-4"></div>
        <div class="form-row mt-2">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Project Name:</label>
            <input
              name="projectName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.projectName}
              type="text"
              class="form-control"
              id="inputEmail4"
            />
            {formik.errors.projectName ? (
              <span style={{ color: "red" }}>{formik.errors.projectName}</span>
            ) : null}
          </div>
          <div class="form-group col-md-6">
            <label for="exampleFormControlSelect1">Category:</label>
            <select
              name="type"
              onChange={formik.handleChange}
              value={formik.values.type}
              class="form-control"
              id="exampleFormControlSelect1"
            >
              <option>Choose...</option>
              <option>Web App</option>
              <option>Mobile App</option>
            </select>
            {formik.errors.type ? (
              <span style={{ color: "red" }}>{formik.errors.type}</span>
            ) : null}
          </div>
          <div class="form-group col-md-6">
            <label for="exampleFormControlSelect1">
              Preferred programming language:
            </label>
            <select
              name="prg_language"
              onChange={formik.handleChange}
              value={formik.values.prg_language}
              class="form-control"
              id="exampleFormControlSelect1"
            >
              <option>Choose...</option>
              <option>C++</option>
              <option>C#</option>
              <option>JAVA</option>
              <option>Javascript</option>
            </select>
            {formik.errors.prg_language ? (
              <span style={{ color: "red" }}>{formik.errors.prg_language}</span>
            ) : null}
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Project Duration:</label>
            <input
              name="duration"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.duration}
              type="text"
              class="form-control"
              id="inputEmail4"
            />
            {formik.errors.duration ? (
              <span style={{ color: "red" }}>{formik.errors.duration}</span>
            ) : null}
          </div>
        </div>
        <div class="form-row mt-4">
          <h5>Project Details</h5>
        </div>
        <div class="form-row mt-2">
          <div class="form-group col-md-6">
            <label for="exampleFormControlTextarea1">
              Describe Your Project:
            </label>
            <textarea
              name="about"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.about}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            {formik.errors.about ? (
              <span style={{ color: "red" }}>{formik.errors.about}</span>
            ) : null}
          </div>
        </div>
        <div class="form-row mt-2">
          <button type="submit" class="btn btn-primary">
            Post Project
          </button>
        </div>
      </form>
    </div>
  );
}

export default Post_project;
