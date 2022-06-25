import React, { useState } from "react";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const { register, handleSubmit } = useForm();
  const [passwordMatchError, setPasswordMatchError] = useState("");

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    const cpassword = data.cpassword;
    console.log(data);
    if (password === cpassword) {
      await createUserWithEmailAndPassword(email, password);
    } else {
      setPasswordMatchError(
        <p className="text-danger text-start mt-3">
          Passwords didn't match, try again
        </p>
      );
    }
  };
  let displayError;
  if (error) {
    displayError = <p className="text-danger">{error?.message}</p>;
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="mt-5 d-flex justify-content-center align-items-center  w-50 p-3">
        <section className="w-100">
          <h1 className="text-center bg-dark text-light  mb-0 p-3 w-100">
            Signup
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
              {...register("cpassword", { required: true })}
              type="password"
              className="form-control  mb-3 p-3"
              placeholder="Confirm Password"
            />
            {passwordMatchError}

            <input
              type="submit"
              className="btn btn-dark text-white w-100 p-3 "
              value="Signup"
            />
          </form>
        </section>
      </div>
    </div>
  );
};

export default Signup;
