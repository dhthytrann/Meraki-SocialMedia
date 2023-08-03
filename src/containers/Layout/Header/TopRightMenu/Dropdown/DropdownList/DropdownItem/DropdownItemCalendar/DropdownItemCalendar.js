import IconDropdown from "../../../../../../../../components/TopNavbar/IconDropdown/IconDropdown";
import img from "../../../../../../../../assets/images/icon/iconly/calendar.png";

const DropdownItemCalendar = () => {
  const navigate = "/calendar";
  return (
    <div>
      <li className="dropdown-item-calendar nav-item">
        <IconDropdown img={img} navigate={navigate} />
      </li>
    </div>
  );
};

export default DropdownItemCalendar;
