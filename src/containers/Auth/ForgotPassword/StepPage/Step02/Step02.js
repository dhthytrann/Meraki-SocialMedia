import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { REGISTER_PAGE } from "../../../../../settings/constant";
import "../Step02/Step02.scss";
import { useContext } from "react";
import { StepContext } from "../../Context/stepContext";

const Step02 = () => {
  const { step, setStep, setVerifyCode } = useContext(StepContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { code1, code2, code3, code4, code5, code6 } = data;
    const code = String(code1 + code2 + code3 + code4 + code5 + code6);
    setStep(3);
    setVerifyCode(code);
  };

  return (
    <div className="step-content step-content-02">
      <div className="title">
        <p className="subject mb-0">Step 02: Enter Verify Code</p>
        <p className="mb-0">
          We have sent you a verifycation code. Please check your email account
          now and enter verify code
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
            Verify
          </button>
        </div>
        <div className="link-to-page">
          <label>
            <p className="mb-0">Didn't get a code?</p>
          </label>
          <Link to={REGISTER_PAGE}>
            <p className="mb-0">Redirect back to registration page</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Step02;
