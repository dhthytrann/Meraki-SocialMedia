import { Link } from "react-router-dom";
import "../TabFriends/TabFriends.scss";
import ItemFriend from "./ItemFriend";
import { useEffect } from "react";

const TabFriends = ({ listFriend }) => {
  const userName = "Jenny Wilson";
  const friendNumber = "10";

  return (
    <div class="tab-pane fade" id="friends-tab-pane">
      <div className="title">
        <h4>Friends</h4>
      </div>
      <div className="friend-list">
        {listFriend &&
          listFriend.map((friend) => (
            <ItemFriend
              key={friend.id}
              imgUser={friend?.avatarLink?.imgLink}
              userName={friend?.firstName + friend?.lastName}
              email={friend?.email}
            />
          ))}
      </div>
    </div>
  );
};

export default TabFriends;
