//@ts-check

import NavBar from "@/Components/NavBar";
import style from "../../styles/login.module.css";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

type LoginValuesType = {
  emailID: string;
  password: string;
};

const LoginSchema = Yup.object().shape({
  emailID: Yup.string().email().required("email is required"),
  password: Yup.string()
    .min(8, "minimum 8 character is required")
    .required("password is required"),
});

const Login = () => {
  const { handleChange, handleBlur, values, handleSubmit, touched, errors } =
    useFormik<LoginValuesType>({
      initialValues: {
        emailID: "",
        password: "",
      },
      validationSchema: LoginSchema,
      onSubmit: (values: LoginValuesType) => {
        console.log(values);
      },
    });

  return (
    <>
      <NavBar />

      <section className="container-fluid bg-warning  ">
        <div
          className=" bg-warning d-flex align-items-center justify-content-center  not-found-container"
          style={{ minHeight: "100vh" }}
        >
          <div
            className={" p-md-3 my-2 mx-2 shadow p-3 mb-5 bg-body rounded"}
            style={{ width: "600px" }}
          >
            <h3>Log In</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group my-md-2">
                <label
                  style={
                    errors.emailID && touched.emailID
                      ? { color: "red" }
                      : { color: "" }
                  }
                >
                  Email Id*
                </label>
                <input
                  type="email"
                  id="emailID"
                  name="emailID"
                  className="form-control"
                  value={values.emailID}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={
                    errors.emailID && touched.emailID
                      ? { border: "1px solid  red" }
                      : { border: "" }
                  }
                />
                {errors.emailID && touched.emailID ? (
                  <small style={{ color: "red" }}>{errors.emailID}</small>
                ) : null}
              </div>
              <div className="form-group my-md-2">
                <label
                  style={
                    errors.password && touched.password
                      ? { color: "red" }
                      : { color: "" }
                  }
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control fix-rounded-right"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={
                    errors.password && touched.password
                      ? { border: "1px solid red" }
                      : { border: "" }
                  }
                />
                {errors.password && touched.password ? (
                  <small style={{ color: "red" }}>{errors.password}</small>
                ) : null}
              </div>
              <button className="btn btn-primary" type="submit">
                Log in
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
