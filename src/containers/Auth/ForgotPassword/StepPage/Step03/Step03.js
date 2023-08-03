import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { REGISTER_PAGE } from "../../../../../settings/constant";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StepContext } from "../../Context/stepContext";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../../../../redux/slice/Auth/authSlice";

const Step03 = () => {
  const [confirm, setConfirm] = useState(true);

  const [values, setValues] = useState({});

  const { step, setStep, verifyCode, email } = useContext(StepContext);

  const err = useSelector((state) => state.auth?.resetPassword?.id);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const { newpassword } = data;
    const newPassword = newpassword;

    console.log(newPassword);

    try {
      dispatch(
        resetPassword({
          email,
          verifyCode,
          newPassword,
        })
      );
      // setStep(4);
      // if (err === true) {
      //   setStep(4);
      // }
    } catch (error) {}
  };

  useEffect(() => {
    if (err != null) {
      setStep(4);
    }
  }, [err]);

  return (
    <div className="step-content">
      <div className="title">
        <p className="subject mb-0">Step 03: Reset your Password</p>
        <p className="mb-0">
          Please enter your new password and confirm password below!
        </p>
      </div>
      <form action="#" className="form-auth" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-item mb-1">
          <label for="newpassword">
            <p className="mb-0">New Password</p>
          </label>
          <div className="inputbox">
            <input
              type="password"
              className="content-input"
              placeholder="New Password"
              name="newpassword"
              {...register("newpassword", { required: true, minLength: 8 })}
            />
            <i class="fa-light fa-lock"></i>
          </div>
          {errors.newpassword?.type === "required" && (
            <span className="err-msg">Password is required</span>
          )}
          {errors.newpassword?.type === "minLength" && (
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
                  const password = getValues("newpassword");
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
        {/* <div className="input-item mb-1">
          <label for="confirmpassword">
            <p className="mb-0">Confirm Password</p>
          </label>
          <div className="inputbox">
            <input
              type="password"
              className="content-input"
              placeholder="Confirm Password"
              name="confirmpassword"
              {...register("confirmpassword", { required: true })}
            />
            <i class="fa-light fa-lock"></i>
          </div>
          {errors.confirmpassword?.type === "required" && (
            <span className="err-msg">Confirm Password is required</span>
          )}
          {values.confirmpassword != values.password && (
            <span className="err-msg">Password do not match</span>
          )}
        </div> */}

        <div className="submit">
          <button type="primary" htmlType="submit" className="btn-submit">
            Reset Password
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

export default Step03;
