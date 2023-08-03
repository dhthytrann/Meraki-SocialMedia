import { useContext, useState } from "react";
import Logo from "../../../components/UI/Logo/Logo";
import "../AuthPage.scss";

import RegisterForm from "./RegisterForm/RegisterForm";
import VerifyForm from "./VerifyForm/VerifyForm";
import { PageContext } from "./Context/pageContext";
import { EmailRegisterContext } from "./Context/emailRegisterContext";
import ContentRegister from "./ContentRegister/ContentRegister";

const Register = () => {
  const [nextPage, setNextPage] = useState(1);
  const [emailRegister, setEmailRegister] = useState("");

  return (
    <div className="auth-page">
      <div className="title">
        <p className="subject mb-0">Welcome to Meraki!</p>
        <p className="mb-0">Please Register for your account</p>
      </div>
      <PageContext.Provider value={[nextPage, setNextPage]}>
        <EmailRegisterContext.Provider
          value={[emailRegister, setEmailRegister]}
        >
          <ContentRegister />
        </EmailRegisterContext.Provider>
      </PageContext.Provider>
    </div>
  );
};

export default Register;
