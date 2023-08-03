import IconDropdown from "../../../../../../../../components/TopNavbar/IconDropdown/IconDropdown";
import img from "../../../../../../../../assets/images/icon/iconly/message.png";
import imgUser from "../../../../../../../../assets/images/user/user-01.jpg";
import ItemMess from "./ItemMess";
import { useState } from "react";
import CardTitle from "../../../../../../../../components/TopNavbar/Card/CardTitle/CardTitle";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
import { MESSAGE_PAGE } from "../../../../../../../../settings/constant";

const DropdownItemMess = (props) => {
  // const imgUser;
  const userName = "Aaron Jones";
  const time = "27 min";
  const message =
    "We should make use of this trip to learn the maximum possible about the places we are visiting";

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
      <li className="dropdown-item-message nav-item">
        <a className="icon-btn d-flex align-items-center">
          <img onClick={() => handleClickDropdown()} src={img} />
        </a>
        {dropdown && (
          <div className="sub-dropdown sub-dropdown-large">
            <div className="card shadow-none m-0">
              <div className="card-body p-0">
                <CardTitle content1={"All Messages"} />
                <div className="list-messages">
                  <ItemMess
                    imgUser={imgUser}
                    userName={userName}
                    time={time}
                    message={message}
                  />
                  <ItemMess
                    imgUser={imgUser}
                    userName={userName}
                    time={time}
                    message={message}
                  />
                  <ItemMess
                    imgUser={imgUser}
                    userName={userName}
                    time={time}
                    message={message}
                  />
                  <ItemMess
                    imgUser={imgUser}
                    userName={userName}
                    time={time}
                    message={message}
                  />
                  <ItemMess
                    imgUser={imgUser}
                    userName={userName}
                    time={time}
                    message={message}
                  />
                  <ItemMess
                    imgUser={imgUser}
                    userName={userName}
                    time={time}
                    message={message}
                  />
                  <ItemMess
                    imgUser={imgUser}
                    userName={userName}
                    time={time}
                    message={message}
                  />
                  <ItemMess
                    imgUser={imgUser}
                    userName={userName}
                    time={time}
                    message={message}
                  />
                </div>
                <Link to={MESSAGE_PAGE} class="view-more">
                  <div href="#" class="btn-navigate text-primary mb-0">
                    View More Messages
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

export default DropdownItemMess;
