import { useContext, useState } from "react";
import Logo from "../../../components/UI/Logo/Logo";
import "../AuthPage.scss";
import "../ForgotPassword/ForgotPassword.scss";

import { StepContext, stepContext } from "./Context/stepContext";
import StepPage from "./StepPage/StepPage";

const ForgotPassword = () => {
  // const [step, setStep] = useContext(stepContext);
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [verifyCode, setVerifyCode] = useState("");

  return (
    <div className="auth-page forgot-password-page">
      {/* <div className="title">
        <p className="subject mb-0">Reset your Password</p>
        <p className="mb-0">Aplatform to connect with the social world. </p>
      </div> */}
      <StepContext.Provider
        value={{ step, setStep, email, setEmail, verifyCode, setVerifyCode }}
      >
        <StepPage />
      </StepContext.Provider>
      {/* <div
        className={
          step == 1 ? "btn-navigate-step-1 btn-navigate" : "btn-navigate"
        }
      >
        {step > 1 && (
          <div
            className="btn-previous-step"
            onClick={() => {
              const nextStep = step - 1;
              setStep(nextStep);
            }}
          >
            <p className="mb-0">Previous</p>
          </div>
        )}
        {(step < 3) && (
          <div
            className="btn-next-step"
            onClick={() => {
              const nextStep = step + 1;
              setStep(nextStep);
            }}
          >
            <p className="mb-0">Next</p>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default ForgotPassword;
