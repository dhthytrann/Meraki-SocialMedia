import { useState } from "react";
import imgUser from "../../../../../../../../assets/images/user/user-01.jpg";
import img from "../../../../../../../../assets/images/icon/iconly/user.png";
import CardTitle from "../../../../../../../../components/TopNavbar/Card/CardTitle/CardTitle";
import ItemFriendReq from "./ItemFriendReq";
import OutsideClickHandler from "react-outside-click-handler";
import { NOTIFICATIONS_PAGE } from "../../../../../../../../settings/constant";
import { Link } from "react-router-dom";

const DropdownItemFriendReq = (props) => {
  const [dropdown, setDropdown] = useState(false);

  // const imgUser;
  const userName = "Jaques Amole";
  const friendNumber = "40";

  const handleClickDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setDropdown(false);
      }}
    >
      <li className="dropdown-item-friend-req nav-item">
        {/* ICON-BUTTON */}
        <a className="icon-btn d-flex align-items-center">
          <img onClick={() => handleClickDropdown()} src={img} />
        </a>
        {dropdown && (
          <div className="sub-dropdown sub-dropdown-large">
            <div className="card shadow-none m-0">
              <div className="card-body p-0">
                <CardTitle content1={"Friend Request"} />
                {/*-------- list friend req------------ */}
                <div className="list-friend-request">
                  <ItemFriendReq
                    imgUser={imgUser}
                    userName={userName}
                    friendNumber={friendNumber}
                  />
                  <ItemFriendReq
                    imgUser={imgUser}
                    userName={userName}
                    friendNumber={friendNumber}
                  />
                  <ItemFriendReq
                    imgUser={imgUser}
                    userName={userName}
                    friendNumber={friendNumber}
                  />
                  <ItemFriendReq
                    imgUser={imgUser}
                    userName={userName}
                    friendNumber={friendNumber}
                  />
                </div>
                <Link to={NOTIFICATIONS_PAGE} class="view-more">
                  <div href="#" class="btn-navigate text-primary mb-0">
                    View More Friend Request
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
export default DropdownItemFriendReq;
