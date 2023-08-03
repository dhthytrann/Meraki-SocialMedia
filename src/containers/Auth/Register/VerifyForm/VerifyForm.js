import { set, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { REGISTER_PAGE } from "../../../../settings/constant";
import "../VerifyForm/VerifyForm.scss";
import { PageContext } from "../Context/pageContext";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { message } from "antd";
import { verifyRegister } from "../../../../redux/slice/Auth/authSlice";
import { EmailRegisterContext } from "../Context/emailRegisterContext";
import { getAllUser, getUser } from "../../../../redux/slice/User/userSlice";

const VerifyForm = () => {
  const [nextPage, setNextPage] = useContext(PageContext);

  const [emailRegister, setEmailRegister] = useContext(EmailRegisterContext);

  const email = emailRegister;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //const authError = useSelector((state) => state.auth.error);
  //const currentUser = useSelector((state) => state.auth.currentUser);

  const user = useSelector((state) => state.user.currentUser);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { code1, code2, code3, code4, code5, code6 } = data;
    const code = String(code1 + code2 + code3 + code4 + code5 + code6);

    dispatch(
      verifyRegister({
        code,
        email,
      })
    );

    reset({
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      code5: "",
      code6: "",
    });
  };

  useEffect(() => {
    dispatch(getUser());
    if (user) {
      navigate("/");
      // if (user?.role === "ADMIN") {
      //   navigate("/admin-page");
      // } else if (user?.role === "USER") {
      //   navigate("/");
      // }
    }
  }, [user]);

  return (
    <div className="verify-form">
      <div className="title">
        {/* <p className="subject mb-0">Welcome to Meraki!</p> */}
        <p className="mb-0 subject">
          Please check your email account now and enter verify code
        </p>
      </div>
      <form
        action="#"
        className="form-auth form-verify"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="d-flex-verify mb-1">
          <div className="input-item ">
            <div className="inputbox mb-1">
              <input
                type="text"
                className="content-input"
                maxLength={1}
                name="code1"
                {...register("code1", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div className="input-item ">
            <div className="inputbox mb-1">
              <input
                type="text"
                className="content-input"
                maxLength={1}
                name="code2"
                {...register("code2", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div className="input-item ">
            <div className="inputbox mb-1">
              <input
                type="text"
                className="content-input"
                maxLength={1}
                name="code3"
                {...register("code3", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div className="input-item ">
            <div className="inputbox mb-1">
              <input
                type="text"
                className="content-input"
                maxLength={1}
                name="code4"
                {...register("code4", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div className="input-item ">
            <div className="inputbox mb-1">
              <input
                type="text"
                className="content-input"
                maxLength={1}
                name="code5"
                {...register("code5", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div className="input-item ">
            <div className="inputbox mb-1">
              <input
                type="text"
                className="content-input"
                maxLength={1}
                name="code6"
                {...register("code6", {
                  required: true,
                })}
              />
            </div>
          </div>
        </div>
        {(errors.code1?.type === "required" ||
          errors.code2?.type === "required" ||
          errors.code3?.type === "required" ||
          errors.code4?.type === "required" ||
          errors.code5?.type === "required" ||
          errors.code6?.type === "required") && (
          <span className="err-msg">Please Enter 6-digit code</span>
        )}
        <div className="submit mt-2">
          <button type="primary" htmlType="submit" className="btn-submit">
            SUBMIT
          </button>
        </div>
        <div className="link-to-page">
          <label>
            <p className="mb-0">Didn't get a code?</p>
          </label>
          <Link
            to={REGISTER_PAGE}
            onClick={() => {
              setNextPage("");
            }}
          >
            <p className="mb-0">Redirect back to registration page</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default VerifyForm;
