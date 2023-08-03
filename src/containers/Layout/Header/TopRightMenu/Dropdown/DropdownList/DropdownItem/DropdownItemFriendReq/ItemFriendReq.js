import "../DropdownItemFriendReq/ItemFriendReq.scss";

const ItemFriendReq = ({ imgUser, userName, friendNumber }) => {
  return (
    <div className="item-friend-request">
      <div className="sub-card sub-card-big d-flex align-items-center justify-content-between">
        <div className="info-user">
          <div className="img-avatar">
            <img className="avatar-40 rounded-circle" src={imgUser} alt="" />
          </div>
          <div className="content-req media-body ml-3">
            <div className="req">
              <h6 className="mb-0 ">{userName}</h6>
              <p className="mb-0">{friendNumber} mutual friends</p>
            </div>
            <div class="btn-request">
              <button className="btn-confirm">
                <i class="fa-solid fa-check"></i>
              </button>
              <button className="btn-remove">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemFriendReq;
