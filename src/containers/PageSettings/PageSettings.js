import { Link, useLocation } from "react-router-dom";
import "../PageSettings/PageSettings.scss";
import { useContext, useEffect, useState } from "react";
import CardChangeAvatar from "./ProfileSettings/CardChangeAvatar/CardChangeAvatar";
import CardChangeBackground from "./ProfileSettings/CardChangeBackground/CardChangeBackground";
import CardPersonalInformation from "./ProfileSettings/CardPersonalInformation/CardPersonalInformation";
import CardSocialNetwork from "./ProfileSettings/CardSocialNetwork/CardSocialNetwork";
import CardAccountInformation from "./AccountSettings/CardAccountInformation/CardAccountInformation";
import CardChangePassword from "./AccountSettings/CardChangePassword/CardChangePassword";
import BannerHeader from "../../components/BannerHeader/BannerHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, getUser } from "../../redux/slice/User/userSlice";
import { UserContext } from "../../context/userContext";
import { DataContext } from "../../context/dataContext";

const PageSettings = () => {
  // const { userData, setUserData } = useContext(DataContext);
  const userData = useSelector((state) => state.user?.currentUser);

  const location = useLocation();
  // console.log(location.pathname);

  const [profileDropdown, setProfileDropdown] = useState(true);
  const dropdownProfileSettings = () => {
    setProfileDropdown(!profileDropdown);
    setAccountDropdown(false);
  };

  const [accountDropdown, setAccountDropdown] = useState(false);
  const dropdownAccountSettings = () => {
    setAccountDropdown(!accountDropdown);
    setProfileDropdown(false);
  };

  const dispatch = useDispatch();

  const [showCard1, setShowCard1] = useState(true);
  const [showCard2, setShowCard2] = useState(false);
  const [showCard3, setShowCard3] = useState(false);
  const [showCard4, setShowCard4] = useState(false);
  const [showCard5, setShowCard5] = useState(false);
  const [showCard6, setShowCard6] = useState(false);

  const setShowContent = (cardNumber) => {
    switch (cardNumber) {
      case 1:
        setShowCard1(true);
        setShowCard2(false);
        setShowCard3(false);
        setShowCard4(false);
        setShowCard5(false);
        setShowCard6(false);
        break;
      case 2:
        setShowCard1(false);
        setShowCard2(true);
        setShowCard3(false);
        setShowCard4(false);
        setShowCard5(false);
        setShowCard6(false);
        break;
      case 3:
        setShowCard1(false);
        setShowCard2(false);
        setShowCard3(true);
        setShowCard4(false);
        setShowCard5(false);
        setShowCard6(false);
        break;
      case 4:
        setShowCard1(false);
        setShowCard2(false);
        setShowCard3(false);
        setShowCard4(true);
        setShowCard5(false);
        setShowCard6(false);
        break;
      case 5:
        setShowCard1(false);
        setShowCard2(false);
        setShowCard3(false);
        setShowCard4(false);
        setShowCard5(true);
        setShowCard6(false);
        break;
      case 6:
        setShowCard1(false);
        setShowCard2(false);
        setShowCard3(false);
        setShowCard4(false);
        setShowCard5(false);
        setShowCard6(true);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div class="page-settings container">
      <BannerHeader
        subject={"Settings Page"}
        decription={"Account Settings and Profile Settings"}
      />
      <div className="row ml-0 mr-0">
        <div className="left-content col-lg-4">
          <div className="box">
            <a
              href="#profile-settings"
              className="btn-profile-settings"
              onClick={() => {
                dropdownProfileSettings();
              }}
            >
              <div
                className={
                  profileDropdown ? "btn-content btn-dropdown" : "btn-content"
                }
              >
                <div className="left">
                  <img src="/images/icon/iconly/profile.png" alt="" />
                  <p className="mb-0">Profile Settings</p>
                </div>
                <div className="right">
                  <i class="fa-regular fa-chevron-right"></i>
                </div>
              </div>
            </a>
            <div
              className={
                profileDropdown
                  ? "profile-settings show-dropdown"
                  : "profile-settings"
              }
            >
              {profileDropdown && (
                <div className="menu-profile-settings">
                  <div
                    className="btn-item"
                    onClick={() => {
                      setShowContent(1);
                    }}
                  >
                    <p className={showCard1 ? "text-dark mb-0" : "mb-0"}>
                      Personal Information
                    </p>
                  </div>
                  <div
                    className="btn-item"
                    onClick={() => {
                      setShowContent(2);
                    }}
                  >
                    <p className={showCard2 ? "text-dark mb-0" : "mb-0"}>
                      Change Avatar
                    </p>
                  </div>
                  <div
                    className="btn-item"
                    onClick={() => {
                      setShowContent(3);
                    }}
                  >
                    <p className={showCard3 ? "text-dark mb-0" : "mb-0"}>
                      Change Background Cover
                    </p>
                  </div>
                  <div
                    className="btn-item border-none"
                    onClick={() => {
                      setShowContent(4);
                    }}
                  >
                    <p className={showCard4 ? "text-dark mb-0" : "mb-0"}>
                      Social Network
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="box">
            <a
              href="#account-settings"
              className="btn-account-settings"
              onClick={() => {
                dropdownAccountSettings();
              }}
            >
              <div
                className={
                  accountDropdown ? "btn-content btn-dropdown" : "btn-content"
                }
              >
                <div className="left">
                  <img src="/images/icon/iconly/setting.png" alt="" />
                  <p className="mb-0">Account Settings</p>
                </div>
                <div className="right">
                  <i class="fa-regular fa-chevron-right"></i>
                </div>
              </div>
            </a>
            <div
              className={
                accountDropdown
                  ? "profile-settings show-dropdown"
                  : "profile-settings"
              }
            >
              {accountDropdown && (
                <div className="menu-account-settings">
                  <div
                    className="btn-item"
                    onClick={() => {
                      setShowContent(5);
                    }}
                  >
                    <p className={showCard5 ? "text-dark mb-0" : "mb-0"}>
                      Account Information
                    </p>
                  </div>
                  <div
                    className="btn-item border-none"
                    onClick={() => {
                      setShowContent(6);
                    }}
                  >
                    <p className={showCard6 ? "text-dark mb-0" : "mb-0"}>
                      Change Password
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="right-content col-lg-8">
          <div className="profile-settings-content">
            <div className="card-profile-information">
              <div className="img-user">
                <img
                  src={
                    userData?.avatarLink?.imgLink
                      ? userData?.avatarLink?.imgLink
                      : "/images/default-avatar.jpg"
                  }
                  alt=""
                />
              </div>
              <div className="content">
                <p className="userName mb-0">{userData?.username}</p>
                <p className="mb-0">Member since 2023</p>
              </div>
            </div>
            <div className={showCard1 ? "animate-to" : "animate-from"}>
              {showCard1 && <CardPersonalInformation />}
            </div>
            <div className={showCard2 ? "animate-to" : "animate-from"}>
              {showCard2 && <CardChangeAvatar />}
            </div>
            <div className={showCard3 ? "animate-to" : "animate-from"}>
              {showCard3 && <CardChangeBackground />}
            </div>
            <div className={showCard4 ? "animate-to" : "animate-from"}>
              {showCard4 && <CardSocialNetwork />}
            </div>
            <div className={showCard5 ? "animate-to" : "animate-from"}>
              {showCard5 && <CardAccountInformation />}
            </div>
            <div className={showCard6 ? "animate-to" : "animate-from"}>
              {showCard6 && <CardChangePassword />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSettings;
