
import DropdownItemCalendar from "./DropdownItem/DropdownItemCalendar/DropdownItemCalendar"
import DropdownItemFriendReq from "./DropdownItem/DropdownItemFriendReq/DropdownItemFriendReq";
import DropdownItemHome from "./DropdownItem/DropdownItemHome/DropdownItemHome";
import DropdownItemMess from "./DropdownItem/DropdownItemMess/DropdownItemMess";
import DropdownItemNoti from "./DropdownItem/DropdownItemNoti/DropdownItemNoti";

const DropdownList = (props) => {

  return (
    <ul className="navigation-bar navbar-nav ml-auto navbar-list">
      <DropdownItemHome /> 
      <DropdownItemFriendReq /> 
      <DropdownItemNoti />
      <DropdownItemMess/>
      <DropdownItemCalendar/>
    </ul>
  );
};

export default DropdownList;
