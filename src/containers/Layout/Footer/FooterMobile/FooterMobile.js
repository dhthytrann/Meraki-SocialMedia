import { Link } from "react-router-dom";
import IconDropdown from "../../../../components/TopNavbar/IconDropdown/IconDropdown";
import { HOME_PAGE, MESSAGE_PAGE, NOTIFICATIONS_PAGE, PROFILE_PAGE, SETTINGS_PAGE } from "../../../../settings/constant";
import "../FooterMobile/FooterMobile.scss";

const FooterMobile = () => {
  return (
    <div className="footer-mobile">
      <IconDropdown
        img={"/images/icon/sidebar/svg/Home.svg"}
        navigate={HOME_PAGE}
      />
      {/* <IconDropdown
        img={"/images/icon/sidebar/svg/2 User.svg"}
        navigate={HOME_PAGE}
      /> */}
      <IconDropdown
        img={"/images/icon/sidebar/svg/Notification.svg"}
        navigate={NOTIFICATIONS_PAGE}
      />
      <IconDropdown
        img={"/images/icon/sidebar/svg/Activity.svg"}
        navigate={MESSAGE_PAGE}
      />
      <IconDropdown
        img={"/images/icon/sidebar/svg/Setting.svg"}
        navigate={SETTINGS_PAGE}
      />
      <div className="btn-navigate-profile">
        <Link to={PROFILE_PAGE}>
          <div className="img-user">
            <img src="/images/user/user-06.jpg" alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FooterMobile;
