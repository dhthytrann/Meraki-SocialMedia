

import "../DropdownItemNoti/ItemNoti.scss"

const ItemNoti = ({ imgUser, notification, time, userName }) => {
  return (
    <div className="item-notification">
      <div className="sub-card sub-card-big d-flex align-items-center justify-content-between">
        <div className="info-user">
          <div className="img-avatar">
            <img className="avatar-40 rounded-circle" src={imgUser} alt="" />
          </div>
          <div className="content-noti media-body ml-3">
            <div className="noti">
              <h6 class="mb-0 ">{notification}</h6>
              <p class="mb-0">{userName}</p>
            </div>
            <div className="time">
              <small></small>
              <small class="float-right font-size-12">{time} ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemNoti;
