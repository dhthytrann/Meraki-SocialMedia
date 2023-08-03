import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import "../Sidebar/Sidebar.scss";
import {
  CALENDAR_PAGE,
  HOME_PAGE,
  MESSAGE_PAGE,
  NOTIFICATIONS_PAGE,
  PROFILE_PAGE,
  SETTINGS_PAGE,
} from "../../../settings/constant";
import { UserContext } from "../../../context/userContext";
import { DataContext } from "../../../context/dataContext";

const Sidebar = ({ userData }) => {
  // const {userData, setUserData} = useContext(DataContext);
  const firstName = userData?.firstName;
  const lastName = userData?.lastName;
  const userName = firstName + lastName;

  // console.log(location.pathname);
  const location = useLocation();
  const pathname = location.pathname;

  const [active1, setAcctive1] = useState(false);
  const [active2, setAcctive2] = useState(false);
  const [active3, setAcctive3] = useState(false);
  const [active4, setAcctive4] = useState(false);
  const [active5, setAcctive5] = useState(false);
  const [active6, setAcctive6] = useState(false);
  const [active7, setAcctive7] = useState(false);

  const param = useParams();

  useEffect(() => {
    const userId = param.userId;

    switch (pathname) {
      case HOME_PAGE:
        setAcctive1(true);
        setAcctive2(false);
        setAcctive3(false);
        setAcctive4(false);
        setAcctive5(false);
        setAcctive6(false);
        setAcctive7(false);
        break;
      case NOTIFICATIONS_PAGE:
        setAcctive1(false);
        setAcctive2(true);
        setAcctive3(false);
        setAcctive4(false);
        setAcctive5(false);
        setAcctive6(false);
        setAcctive7(false);
        break;
      case PROFILE_PAGE:
        setAcctive1(false);
        setAcctive2(false);
        setAcctive3(true);
        setAcctive4(false);
        setAcctive5(false);
        setAcctive6(false);
        setAcctive7(false);
        break;
      case PROFILE_PAGE:
        setAcctive1(false);
        setAcctive2(false);
        setAcctive3(false);
        setAcctive4(true);
        setAcctive5(false);
        setAcctive6(false);
        setAcctive7(false);
        break;
      case `/message/${userId}`:
        setAcctive1(false);
        setAcctive2(false);
        setAcctive3(false);
        setAcctive4(false);
        setAcctive5(true);
        setAcctive6(false);
        setAcctive7(false);
        break;
      case CALENDAR_PAGE:
        setAcctive1(false);
        setAcctive2(false);
        setAcctive3(false);
        setAcctive4(false);
        setAcctive5(false);
        setAcctive6(true);
        setAcctive7(false);
        break;
      case SETTINGS_PAGE:
        setAcctive1(false);
        setAcctive2(false);
        setAcctive3(false);
        setAcctive4(false);
        setAcctive5(false);
        setAcctive6(false);
        setAcctive7(true);
        break;
      default:
        setAcctive1(false);
        setAcctive2(false);
        setAcctive3(false);
        setAcctive4(false);
        setAcctive5(false);
        setAcctive6(false);
        setAcctive7(false);
        break;
    }
  });

  return (
    <div className="sidebar-scrollbar">
      <div className="logo">
        <Link to="/" className="logo-img  text-decoration-none">
          <img src="/images/logo.png" alt="" />
          <span className="logo-title">Meraki</span>
        </Link>
      </div>
      <div className="content">
        <div className="profile">
          <div className="img-avatar">
            <img
              className="avatar-40 rounded-circle"
              src={
                userData?.avatarLink?.imgLink
                  ? userData?.avatarLink?.imgLink
                  : "/images/default-avatar.jpg"
              }
              alt=""
            />
          </div>
          <div className="content media-body ml-3">
            <Link to={PROFILE_PAGE}>
              <h5 className="mb-0 line-height name">
                {userName ? userName : "User Meraki"}
              </h5>
            </Link>
            <span class="mb-0 line-height">{userData?.email}</span>
          </div>
        </div>
        <div className="menu">
          <h6 className="title">MENU</h6>
          <nav className="sidebar-menu">
            <ul className="">
              <li className={active1 && "active"}>
                <Link to={HOME_PAGE} replace={false}>
                  <div className="btn-navigate">
                    <img
                      className="icon-sidebar"
                      src="/images/icon/sidebar/svg/Document.svg"
                      alt=""
                    />
                    <span>Newsfeed</span>
                  </div>
                </Link>
              </li>
              <li className={active2 && "active"}>
                <Link to={NOTIFICATIONS_PAGE} replace={false}>
                  <div className="btn-navigate">
                    <img
                      className="icon-sidebar"
                      src="/images/icon/sidebar/svg/Notification.svg"
                      alt=""
                    />
                    <span>Notifications</span>
                  </div>
                </Link>
              </li>
              <li className={active3 && "active"}>
                <Link to={PROFILE_PAGE} replace={false}>
                  <div className="btn-navigate">
                    <img
                      className="icon-sidebar"
                      src="/images/icon/sidebar/svg/2 User.svg"
                      alt=""
                    />
                    <span>Friend Lists</span>
                  </div>
                </Link>
              </li>
              <li className={active4 && "active"}>
                <Link to={PROFILE_PAGE} replace={false}>
                  <div className="btn-navigate">
                    <img
                      className="icon-sidebar"
                      src="/images/icon/sidebar/svg/Image.svg"
                      alt=""
                    />
                    <span>Gallery</span>
                  </div>
                </Link>
              </li>
              <li className={active5 && "active"}>
                <Link to={"/message/none"} replace={false}>
                  <div className="btn-navigate">
                    <img
                      className="icon-sidebar"
                      src="/images/icon/sidebar/svg/Activity.svg"
                      alt=""
                    />
                    <span>Message</span>
                  </div>
                </Link>
              </li>
              <li className={active6 && "active"}>
                <Link to={CALENDAR_PAGE} replace={false}>
                  <div className="btn-navigate">
                    <img
                      className="icon-sidebar"
                      src="/images/icon/sidebar/svg/Calendar.svg"
                      alt=""
                    />
                    <span>Calendar</span>
                  </div>
                </Link>
              </li>
              <li className={active7 && "active"}>
                <Link to={SETTINGS_PAGE} replace={false}>
                  <div className="btn-navigate">
                    <img
                      className="icon-sidebar"
                      src="/images/icon/sidebar/svg/Filter.svg"
                      alt=""
                    />
                    <span>Settings</span>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer">
        <p>© 2023 Classification Essay</p>
      </div>
    </div>
  );
};
export default Sidebar;
