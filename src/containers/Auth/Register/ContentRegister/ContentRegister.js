import { useContext, useState } from "react";
import RegisterForm from "../RegisterForm/RegisterForm";
import VerifyForm from "../VerifyForm/VerifyForm";
import { PageContext } from "../Context/pageContext";

const ContentRegister = () => {
  const [nextPage, setNextPage] = useContext(PageContext);


  return (
    <div className="content">
      {nextPage > 1 ? <VerifyForm /> : <RegisterForm />}
    </div>
  );
};

export default ContentRegister;
