import useWindowSize from "../../../../library/hooks/useWindowSize";
import "../TopRightMenu/TopRightMenu.scss";
import DropdownList from "./Dropdown/DropdownList/DropdownList";
import DropdownUser from "./Dropdown/DropdownList/DropdownUser/DropdownUser";

const TopRightMenu = (props) => {
  return (
    <div className="top-right-menu">
      <DropdownList />
      <DropdownUser />
    </div>
  );
};

export default TopRightMenu;
