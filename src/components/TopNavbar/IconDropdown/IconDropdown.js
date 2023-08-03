import { Link } from "react-router-dom";

const IconDropdown = ({ img, navigate }) => {
  // console.log(navigate);

  return (
    <Link to={navigate} className="icon-btn d-flex align-items-center">
      <img src={img} alt="" />
    </Link>
  );
};

export default IconDropdown;
