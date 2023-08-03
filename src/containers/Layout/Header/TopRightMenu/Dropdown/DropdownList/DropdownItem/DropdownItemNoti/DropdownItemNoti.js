import IconDropdown from "../../../../../../../../components/TopNavbar/IconDropdown/IconDropdown";
import imgUser from "../../../../../../../../assets/images/user/user-01.jpg";
import img from "../../../../../../../../assets/images/icon/iconly/notification.png";
import CardTitle from "../../../../../../../../components/TopNavbar/Card/CardTitle/CardTitle";
import ItemNoti from "./ItemNoti";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
import { NOTIFICATIONS_PAGE } from "../../../../../../../../settings/constant";

const DropdownItemNoti = () => {
  //const imgUser
  const notification = "New a customer is join";
  const time = "5 days";
  const userName = "Jenny Wilson";

  const [dropdown, setDropdown] = useState(false);

  const handleClickDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setDropdown(false);
      }}
    >
      <li className="dropdown-item-notification nav-item">
        <a className="icon-btn d-flex align-items-center">
          <img onClick={() => handleClickDropdown()} src={img} />
        </a>
        {dropdown && (
          <div className="sub-dropdown sub-dropdown-large">
            <div className="card shadow-none m-0">
              <div className="card-body p-0">
                <CardTitle content1={"All Notifications"} />
                <div className="list-notifications">
                  <ItemNoti
                    imgUser={imgUser}
                    notification={notification}
                    time={time}
                    userName={userName}
                  />
                  <ItemNoti
                    imgUser={imgUser}
                    notification={notification}
                    time={time}
                    userName={userName}
                  />
                  <ItemNoti
                    imgUser={imgUser}
                    notification={notification}
                    time={time}
                    userName={userName}
                  />
                  <ItemNoti
                    imgUser={imgUser}
                    notification={notification}
                    time={time}
                    userName={userName}
                  />
                </div>
                <Link to={NOTIFICATIONS_PAGE} class="view-more">
                  <div href="#" class="btn-navigate text-primary mb-0">
                    View More Notification
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </li>
    </OutsideClickHandler>
  );
};

export default DropdownItemNoti;
