import React from "react";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/home";
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    await signInWithEmailAndPassword(email, password);

    console.log(data);
  };

  let displayError;
  if (error) {
    displayError = <p className="text-danger text-start">{error?.message}</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="mt-5 d-flex justify-content-center align-items-center  w-50 p-3">
        <section className="w-100">
          <h1 className="text-center bg-dark text-light  mb-0 p-3 w-100">
            Login
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-100 text-start shadow-lg p-5"
          >
            {displayError}
            <input
              {...register("email", { required: true })}
              type="email"
              className="form-control mb-3 p-3"
              placeholder="Your Email"
            />
            <input
              {...register("password", { required: true })}
              type="password"
              className="form-control mb-3 p-3"
              placeholder="Password"
            />

            <input
              type="submit"
              className="btn btn-dark text-white w-100 p-3"
              value="Login"
            />
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
