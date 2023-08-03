import { useEffect, useState } from "react";

const ItemFriend = ({ imgUser, userName, email, role }) => {
  // const [usable, setUsable] = useState(false);

  // useEffect(() => {
  //   if (role == "owner") {
  //     setUsable(true);
  //   }
  // });

  return (
    <div className="item-friend">
      <div className="info-user">
        <div className="img-user">
          <img src={imgUser} alt="" />
        </div>
        <div className="content">
          <p className="mb-0 username">{userName}</p>
          <p className="mb-0">Email: {email}</p>
        </div>
      </div>
      {/* <div className="btn-unfriend">
        <p className="mb-0">Unfriend</p>
      </div> */}
    </div>
  );
};

export default ItemFriend;
