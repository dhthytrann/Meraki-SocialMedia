

import "../DropdownItemMess/ItemMess.scss"

const ItemMess = ({ imgUser, userName, time, message }) => {
  return (
    <div className="item-message">
      <div className="sub-card sub-card-big d-flex align-items-center justify-content-between">
        <div className="info-user">
          <div className="img-avatar">
            <img className="avatar-40 rounded-circle" src={imgUser} alt="" />
          </div>
          <div className="content-mess media-body ml-3">
            <div className="mess">
              <h6 class="mb-0 ">{userName}</h6>
              <p class="mb-0">{message}</p>
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

export default ItemMess;
