import { useFormik } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { applyProject } from "../api/freelancer";

function Apply_project() {
  const params = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fId: params.fId,
      position: "",
      mobile: "",
    },
    validate: (values) => {
      let error = {};
      if (!values.position) {
        error.position = "*Position Required";
      }
      if (!values.mobile) {
        error.mobile = "*Mobile No. Required";
      }
      if (values.mobile && values.mobile.toString().length !== 10) {
        error.mobile = "Please enter valid mobile number";
      }
      return error;
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        let apply = await applyProject(params.fId, params.pId, values);
        alert("You are Applied  Successfully!");
        console.log(apply.data.acknowledged);
        navigate(`/freelancer_portal/all_Projects/${params.fId}`);
      } catch (error) {
        console.log(error);
        alert(error.response.data.message);
      }
    },
  });
  return (
    <div className="container">
      <h4>Apply to the Project ...</h4>
      <div className="row mt-5">
        <div className="col-lg-4">
          <form onSubmit={formik.handleSubmit}>
            <div class="form-group">
              <label for="formGroupExampleInput">
                Position: (ex: Javascript, C++, etc...)
              </label>
              <input
                name="position"
                onChange={formik.handleChange}
                value={formik.values.position}
                type="text"
                class="form-control"
                id="formGroupExampleInput"
              />
              {formik.errors.position ? (
                <span style={{ color: "red" }}>{formik.errors.position}</span>
              ) : null}
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput">Mobile No.:</label>
              <input
                name="mobile"
                onChange={formik.handleChange}
                value={formik.values.mobile}
                type="number"
                class="form-control"
                id="formGroupExampleInput"
              />
              {formik.errors.mobile ? (
                <span style={{ color: "red" }}>{formik.errors.mobile}</span>
              ) : null}
            </div>
            <button type="submit" class="btn btn-primary">
              Apply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Apply_project;
