import { useState } from "react";
import "../ItemFriendSuggestion/ItemFriendSuggestion.scss";

const ItemFriendSuggestion = ({
  imgUser,
  userName,
  friendNumber,
  friendState,
}) => {
  const [clickAdd, setClickAdd] = useState(friendState);

  const handleClickBtnAdd = () => {
    setClickAdd(!clickAdd);
  };
  return (
    <div className="item-friend-suggest">
      <div className="sub-card d-flex align-items-center justify-content-between">
        <div className="info-user">
          <div className="img-avatar">
            <img className=" rounded-circle" src={imgUser} alt="" />
          </div>
          <div className="content media-body ml-3">
            <div className="req">
              <h6 className="mb-0 ">{userName}</h6>
              <p className="mb-0">{friendNumber} friends</p>
            </div>
            <div class="btn-request">
              {clickAdd ? (
                <button
                  className="btn-add mr-1"
                  onClick={() => {
                    handleClickBtnAdd();
                  }}
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
              ) : (
                <button
                  className="btn-friended mr-1"
                  onClick={() => {
                    handleClickBtnAdd();
                  }}
                >
                  <i class="fa-solid fa-check"></i>
                  {/* <p>Friended</p> */}
                </button>
              )}
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
export default ItemFriendSuggestion;
