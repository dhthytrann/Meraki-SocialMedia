import img from "../../../../../../../../assets/images/icon/iconly/home.png";
import IconDropdown from "../../../../../../../../components/TopNavbar/IconDropdown/IconDropdown";

const DropdownItemHome = (props) => {
  const navigate = "/";
  return (
    <div>
      <li className="dropdown-item-home">
        <IconDropdown img={img} navigate={navigate} />
      </li>
    </div>
  );
};
export default DropdownItemHome;
