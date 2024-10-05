import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import signImage from "../images/sign-image.jpeg";

// Define the shape of the form values
interface SignInFormValues {
  name: string;
}

const SignIn = () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters long"),
  });

  // Handle form submission
  const handleSubmit = (values: SignInFormValues) => {
    console.log("Form data", values);
    // Here you would usually handle the sign-in logic (e.g., API call)
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left Side (Text) */}
      <div className="w-full mr-10 md:w-3/4 flex justify-center items-center">
        <div className="text-center text-black">
          <h1 className="font-extrabold text-5xl">DUN.</h1>

          <div className="justify-center items-center">
            <div className="text-slate-500 font-semibold">
              <p>Welcome back</p>
              <p>Get your things DUN</p>
            </div>

            {/* Formik Form */}
            <Formik
              initialValues={{ name: "" }} // Initial values for the form
              validationSchema={validationSchema} // Validation schema
              onSubmit={handleSubmit} // Form submission handler
            >
              {() => (
                <Form className="flex flex-col justify-center items-center mt-4">
                  <Field
                    name="name" // Form field name
                    type="text" // Input type
                    className="w-[270px] bg-slate-300 rounded-[20px] border-none p-2 md:w-[300px] text-center mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Your Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />

                  <button
                    type="submit"
                    className="rounded-[20px] w-[270px] md:w-[300px] mt-4 bg-blue-300 text-black font-semibold py-2 px-4 hover:bg-blue-400 transition duration-300"
                  >
                    Login In
                  </button>
                  <p className="font-semibold mt-1">
                    Don't have an account?
                    <span className="text-blue-500">
                      <Link to="/signup">Sign Up</Link>
                    </span>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="hidden md:flex md:w-3/4 justify-center items-center">
        <div className="text-center text-black mr-[10rem] md:w-3/3">
          <img src={signImage} alt="Sign In" className="p-4 rounded-[70px]" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
