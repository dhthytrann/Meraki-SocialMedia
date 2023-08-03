import { useContext, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import CardTitle from "../../../../../../../components/TopNavbar/Card/CardTitle/CardTitle";
import ItemNavigate from "./ItemNavigate";
import "../DropdownUser/DropdownUser.scss";
import {
  PROFILE_PAGE,
  SETTINGS_PAGE,
} from "../../../../../../../settings/constant";
import { UserContext } from "../../../../../../../context/userContext";
import { DataContext } from "../../../../../../../context/dataContext";
import { useDispatch, useSelector } from "react-redux";

import { clearLocalStorage } from "../../../../../../../redux/api/setLocalStorage";
import { AuthContext } from "../../../../../../../context/authContext";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../../../../redux/slice/User/userSlice";

const DropdownUser = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const userData = useSelector((state) => state.user?.currentUser);

  const firstName = userData?.firstName;
  const lastName = userData?.lastName;
  const userName = firstName + lastName;
  const state = "Available";

  const navigate = useNavigate();

  const handleClickDropdown = (item) => {
    setDropdown(!dropdown);
  };

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  return (
    <ul className="user-dropdown navbar-list">
      <OutsideClickHandler
        onOutsideClick={() => {
          setDropdown(false);
        }}
      >
        <div className="icon-btn">
          <img
            onClick={() => handleClickDropdown()}
            src={
              userData?.avatarLink?.imgLink
                ? userData?.avatarLink?.imgLink
                : "/images/default-avatar.jpg"
            }
            className="img-fluid rounded-circle"
            alt="user"
          />
        </div>
        {dropdown && (
          <div className="sub-user-dropdown sub-dropdown-large">
            <div className="card shadow-none m-0">
              <div className="card-body p-0">
                <CardTitle
                  content1={userName ? userName : "User Meraki"}
                  content2={state}
                />
                <div className="list-navigate">
                  <ItemNavigate
                    iconImg={"/images/icon/iconly/user.png"}
                    menuTitle={"My Profile"}
                    description={"View personal profile details"}
                    navigate={PROFILE_PAGE}
                  />
                  <ItemNavigate
                    iconImg={"/images/icon/iconly/setting.png"}
                    menuTitle={"Account Settings"}
                    description={"Manage your account parameters"}
                    navigate={SETTINGS_PAGE}
                  />
                  <ItemNavigate
                    iconImg={"/images/icon/iconly/filter.png"}
                    menuTitle={"Profile Settings"}
                    description={"Modify your personal details"}
                    navigate={SETTINGS_PAGE}
                  />
                  <ItemNavigate
                    iconImg={"/images/icon/iconly/image.png"}
                    menuTitle={"Change Avatar"}
                    description={"Modify your avatar"}
                    navigate={SETTINGS_PAGE}
                  />
                </div>
                <div
                  class="btn-logout view-more text-center line-height"
                  onClick={() => {
                    handleLogOut();
                  }}
                >
                  <button class="btn text-white mb-0 btn-primary">
                    <span className="">Log Out</span>
                    <img src="/images/icon/iconly/logout.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </OutsideClickHandler>
    </ul>
  );
};

export default DropdownUser;
