import NavBar from "@/Components/NavBar";
import { Container, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

type SignupValueType = {
  firstName: string;
  lastName: string;
  emailID: string;
  password: string;
  conformPassword: string;
};

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, "minimum 4 character is required")
    .required("First name is required"),
  lastName: Yup.string()
    .min(4, "minimum 4 character is required")
    .required("Last Name is require"),
  emailID: Yup.string().email().required("email is required"),
  password: Yup.string()
    .min(8, "minimum 8 digit password is required")
    .required("email is required")
    .matches(
      /^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,
      "Must contain 8 character , one uppercase , one lowercase , one number and one special character"
    ),
  conformPassword: Yup.string()
    .required("password  is required")
    .oneOf([Yup.ref("password"), ""], "password must be same"),
});

const SignUp = () => {
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik<SignupValueType>({
      initialValues: {
        firstName: "",
        lastName: "",
        emailID: "",
        password: "",
        conformPassword: "",
      },
      validationSchema: SignupSchema,
      onSubmit: (values: SignupValueType) => {
        console.log(values);
      },
    });

  return (
    <>
      <NavBar />
      <div className="my-5">
        <Container className="border ">
          <div className="p-md-3 mx-md-2 my-md-2">
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group my-md-2">
                <label
                  style={
                    errors.firstName && touched.firstName
                      ? { color: "red" }
                      : {}
                  }
                >
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={
                    errors.firstName && touched.firstName
                      ? { border: "1px solid red" }
                      : {}
                  }
                />
                {errors.firstName && touched.firstName ? (
                  <small style={{ color: "red" }}>{errors.firstName}</small>
                ) : null}
              </div>
              <div className="form-group my-md-2">
                <label
                  style={
                    errors.lastName && touched.lastName ? { color: "red" } : {}
                  }
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={
                    errors.lastName && touched.lastName
                      ? { border: "1px solid red" }
                      : {}
                  }
                />
                {errors.lastName && touched.lastName ? (
                  <small style={{ color: "red" }}>{errors.lastName}</small>
                ) : null}
              </div>
              <div className="form-group my-md-2">
                <label
                  style={
                    errors.emailID && touched.emailID ? { color: "red" } : {}
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
                      ? { border: "1px solid red" }
                      : {}
                  }
                />
                {errors.emailID && touched.emailID ? (
                  <small style={{ color: "red" }}>{errors.emailID}</small>
                ) : null}
              </div>
              <div className="form-group my-md-2">
                <label
                  style={
                    errors.password && touched.password ? { color: "red" } : {}
                  }
                >
                  Password*
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={
                    errors.password && touched.password
                      ? { border: "1px solid red" }
                      : {}
                  }
                />
                {errors.password && touched.password ? (
                  <small style={{ color: "red" }}>{errors.password}</small>
                ) : null}
              </div>
              <div className="form-group my-md-2">
                <label
                  style={
                    errors.conformPassword && touched.conformPassword
                      ? { color: "red" }
                      : {}
                  }
                >
                  Confirm Password*
                </label>
                <input
                  type="password"
                  id="conformPassword"
                  name="conformPassword"
                  className="form-control"
                  value={values.conformPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={
                    errors.conformPassword && touched.conformPassword
                      ? { border: "1px solid red" }
                      : {}
                  }
                />
                {errors.conformPassword && touched.conformPassword ? (
                  <small style={{ color: "red" }}>
                    {errors.conformPassword}
                  </small>
                ) : null}
              </div>
              <button className="btn btn-primary">Sign up</button>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
