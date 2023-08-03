import { Link } from "react-router-dom";
import "../Step04/Step04.scss";
import { LOGIN_PAGE } from "../../../../../settings/constant";

const Step04 = () => {
  return (
    <div className="step-successfully">
      <div className="badge-successfully mb-3">
        <i class="fa-regular fa-check"></i>
      </div>
      <div className="title mb-3">
        <p className="subject mb-2">Reset password successfully!</p>
        <p className="mb-0">
          Please reset request was sent successfully. Please login with your new
          password!
        </p>
      </div>
      <Link to={LOGIN_PAGE} className="submit">
        <button type="primary" htmlType="submit" className="btn-submit">
          Login with new password
        </button>
      </Link>
    </div>
  );
};

export default Step04;
