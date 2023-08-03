import { useContext, useEffect, useState } from "react";
import "../Messages/Messages.scss";
import ChatBox from "./ChatBox/ChatBox";
import { DataContext } from "../../context/dataContext";
import { useDispatch, useSelector } from "react-redux";
import { getConversation } from "../../redux/slice/Message/messageSlice";
import { useNavigate, useParams } from "react-router-dom";

const Messages = () => {
  // const { userData, allUserData } = useContext(DataContext);
  const userData = useSelector((state) => state.user?.currentUser);
  const allUserData = useSelector((state) => state.user?.listAllUser);
  const conversationData = useSelector(
    (state) => state.message?.conversation?.data
  );
  // const [conversationData, setConversationData] = useState(
  //   JSON.parse(localStorage.getItem("conversation"))
  // );

  const dispatch = useDispatch();
  const params = useParams();

  const waitlist = allUserData.filter(
    (val) => val.role === "USER" && val.id != userData?.id
  );

  // const handleGetConversation = () => {
  //   const userId = params.userId;
  //   dispatch(
  //     getConversation({
  //       userId,
  //     })
  //   );
  // };

  const navigate = useNavigate();
  const handleNavigateChatBox = (id) => {
    navigate(`/message/${id}`);
  };

  useEffect(() => {
    const userId = params.userId;
    dispatch(
      getConversation({
        userId,
      })
    );
  }, [params]);

  return (
    <div className="messages-page container">
      <div className="row ml-0 mr-0">
        <div className="chat-data-left col-lg-3 p-0">
          <div className="box">
            <div className="body-box">
              <div className="title">
                <p className="mb-0">Chats</p>
              </div>
              <div className="waitlist-user">
                {waitlist &&
                  waitlist.map((user) => (
                    <div
                      className="item-user-chat"
                      key={user.id}
                      onClick={() => handleNavigateChatBox(user.id)}
                    >
                      <div className="img-user">
                        <img src={user?.avatarLink?.imgLink} alt="" />
                      </div>
                      <div className="content">
                        <p className="username">
                          {user?.firstName + user?.lastName}
                        </p>
                        <p className="mb-0 message">
                          Yes, very sad. Anyway it was nice talking to you. See
                          you tomorrow in school
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="user-info">
              <div className="img-user mr-3">
                <img src={userData?.avatarLink?.imgLink} alt="" />
              </div>
              <div className="content">
                <p className="username mb-0">
                  {userData?.firstName + userData?.lastName}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-data-right col-lg-9">
          <ChatBox conversation={conversationData} />
        </div>
      </div>
    </div>
  );
};

export default Messages;

// . Anyway it was nice talking to you. See you tomorrow in school
