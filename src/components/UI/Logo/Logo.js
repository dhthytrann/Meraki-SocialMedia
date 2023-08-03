import { Link } from "react-router-dom";
import "./Logo.scss";
import useWindowSize from "../../../library/hooks/useWindowSize";

const Logo = (props) => {
  const { width } = useWindowSize();
  return (
    <div className="logo navbar-logo">
      <Link to="/home" className="logo-img  text-decoration-none">
        <div className="img-logo">
          <img src="/images/logo.png" class="img-fluid" alt="" />
        </div>
        {width > 470 && <span className="logo-title">Meraki</span>}
      </Link>

      {/* OPEN SIDEBAR */}
      {/* <div className="menu-bt align-self-center">
        <div className="wrapper-menu">
          <div className="main-circle">
            <i class="fa-solid fa-bars-sort"></i>
          </div>
        </div> 
      </div> */}
    </div>
  );
};
export default Logo;
