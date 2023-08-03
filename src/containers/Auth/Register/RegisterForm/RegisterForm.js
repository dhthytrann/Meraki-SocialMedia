import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { LOGIN_PAGE, VERIFY_PAGE } from "../../../../settings/constant";
import { useDispatch, useSelector } from "react-redux";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { PageContext, StepVerifyContext } from "../Context/pageContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../../../../redux/slice/Auth/authSlice";
import { message } from "antd";
import { EmailRegisterContext } from "../Context/emailRegisterContext";

const RegisterForm = () => {
  const [nextPage, setNextPage] = useContext(PageContext);

  const [values, setValues] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.auth.currentUser);
  const authError = useSelector((state) => state.auth.error);

  const [emailRegister, setEmailRegister] = useContext(EmailRegisterContext);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { username, email, password } = data;
    const enabled = false;
    const userName = username;
    dispatch(
      registerUser({
        userName,
        email,
        password,
        enabled,
      })
    );

    setEmailRegister(email);

    reset({
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  useEffect(() => {
    if (currentUser?.status == true) {
      setNextPage(2);
    }
  });

  return (
    <form action="#" className="form-auth" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-item mb-1">
        <label for="username">
          <p className="mb-0">Username</p>
        </label>
        <div className="inputbox mb-1">
          <input
            type="text"
            className="content-input"
            placeholder="Username"
            name="username"
            {...register("username", {
              required: true,
            })}
          />
          <i class="fa-thin fa-user-plus"></i>
        </div>
        {errors.username?.type === "required" && (
          <span className="err-msg">Username is required</span>
        )}
      </div>
      <div className="input-item mb-1">
        <label for="email">
          <p className="mb-0">Email Address</p>
        </label>
        <div className="inputbox mb-1">
          <input
            type="email"
            className="content-input"
            placeholder="Email Address"
            name="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                //   message: "invalid email address",
              },
            })}
          />
          <i class="fa-thin fa-user-plus"></i>
        </div>
        {errors.email?.type === "required" && (
          <span className="err-msg">Email Address is required</span>
        )}
        {errors.email?.type === "pattern" && (
          <span className="err-msg">Invalid Email Address</span>
        )}
      </div>
      <div className="input-item mb-1">
        <label for="password">
          <p className="mb-0">Password</p>
        </label>
        <div className="inputbox">
          <input
            type="password"
            className="content-input"
            placeholder="Password"
            name="password"
            {...register("password", { required: true, minLength: 8 })}
          />
          <i class="fa-light fa-lock"></i>
        </div>
        {errors.password?.type === "required" && (
          <span className="err-msg">Password is required</span>
        )}
        {errors.password?.type === "minLength" && (
          <span className="err-msg">
            Password should be at least 8 characters
          </span>
        )}
      </div>
      <div className="input-item mb-1">
        <label for="confirmpassword">
          <p className="mb-0">Confirm Password</p>
        </label>
        <div className="inputbox">
          <input
            type="password"
            className="content-input"
            placeholder="Confirm Password"
            name="confirmpassword"
            {...register("confirmpassword", {
              required: true,
              validate: (value) => {
                const password = getValues("password");
                if (value !== password) {
                  return "Password is not matched!";
                }
              },
            })}
          />
          <i class="fa-light fa-lock"></i>
        </div>
        {errors.confirmpassword?.type === "required" && (
          <span className="err-msg">Confirm Password is required</span>
        )}
        {errors.confirmpassword?.message && (
          <span className="err-msg">{errors.confirmpassword?.message}</span>
        )}
      </div>

      <div className="item">
        <div className="remember">
          <input type="checkbox" class="" id="checkRemember" />
          <label className="mb-0" for="checkRemember">
            <p className="mb-0">I agree with terms and conditions</p>
          </label>
        </div>
      </div>
      <div className="submit">
        <button type="primary" htmlType="submit" className="btn-submit">
          SIGN UP
        </button>
      </div>
      <div className="link-to-page">
        <label>
          <p className="mb-0">Already Have An Account?</p>
        </label>
        <Link to={LOGIN_PAGE}>
          <p className="mb-0">Login</p>
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
