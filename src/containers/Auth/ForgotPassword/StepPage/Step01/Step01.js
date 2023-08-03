import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { REGISTER_PAGE } from "../../../../../settings/constant";
import { StepContext } from "../../Context/stepContext";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendVerifyCodeByEmail } from "../../../../../redux/slice/Auth/authSlice";
import { message } from "antd";

const Step01 = () => {
  const { step, setStep, setEmail } = useContext(StepContext);
  const err = useSelector((state) => state.auth?.sendVerifyCode?.status);

  const [emailTemp, setEmailTemp] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const { email } = data;
    try {
      dispatch(
        sendVerifyCodeByEmail({
          email,
        })
      );

      setEmailTemp(email);

      // if (err === true) {
      //   setStep(2);
      //   setEmail(email);
      // } else if (err === false) {
      //   reset({
      //     email: "",
      //   });
      // }
    } catch (error) {}
  };

  useEffect(() => {
    if (err) {
      setStep(2);
      setEmail(emailTemp);
    }
  }, [err]);

  return (
    <div className="step-content">
      <div className="title">
        <p className="subject mb-0">Step 01: Enter your Email address</p>
        <p className="mb-0">
          Please enter the email address you'd like your password reset
          information sent to
        </p>
      </div>
      <form action="#" className="form-auth" onSubmit={handleSubmit(onSubmit)}>
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

        <div className="submit">
          <button type="primary" htmlType="submit" className="btn-submit">
            Get a verification code
          </button>
        </div>
        <div className="link-to-page">
          <label>
            <p className="mb-0">Don't Have An Account?</p>
          </label>
          <Link to={REGISTER_PAGE}>
            <p className="mb-0">Register</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Step01;
