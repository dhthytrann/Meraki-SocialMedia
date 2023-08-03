import Logo from "../../../components/UI/Logo/Logo";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { REGISTER_PAGE } from "../../../settings/constant";

const VerifyPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="auth-page">
      <div className="title">
        <p className="subject mb-0">Account verification!</p>
        <p className="mb-0">
          Enter the 6-digit verification code to confirm that you received the
          text message
        </p>
      </div>
      <div className="content">
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
            <Link to={REGISTER_PAGE}>
              <p className="mb-0">Redirect back to registration page</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyPage;
