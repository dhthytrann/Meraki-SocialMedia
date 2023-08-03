import { useContext, useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { DataContext } from "../../../context/dataContext";
import ItemMessageLeft from "../ItemMessageLeft/ItemMessageLeft";
import ItemMessageRight from "../ItemMessageRight/ItemMessageRight";
import { useDispatch, useSelector } from "react-redux";
import {
  getConversation,
  sendMessage,
} from "../../../redux/slice/Message/messageSlice";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { message } from "antd";
import OutsideClickHandler from "react-outside-click-handler";
import ScrollToBottom from "react-scroll-to-bottom";

const ChatBox = ({ conversation }) => {
  // const { allUserData } = useContext(DataContext);
  // const { userData } = useContext(DataContext);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const userData = useSelector((state) => state.user?.currentUser);
  const allUserData = useSelector((state) => state.user?.listAllUser);

  const params = useParams();
  const idRecipient = params.userId;

  const findUserById = allUserData.filter((val) => {
    return val.id == idRecipient;
  });

  const recipientData = [...findUserById];

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { message } = data;
    const idSender = userData?.id;
    const idReceiver = params.userId * 1;

    dispatch(
      sendMessage({
        message,
        idSender,
        idReceiver,
      })
    );

    reset({
      message: "",
    });
  };

  const [isPickerVisible, setPickerVisible] = useState(false);

  const onclickEmoji = (emoji) => {
    const temp = watch("message");
    reset({
      message: `${temp + emoji}`,
    });
    //setPickerVisible(!isPickerVisible);
  };

  useEffect(() => {
    const userId = params.userId;
    dispatch(
      getConversation({
        userId,
      })
    );
  }, [params]);

  //fectch API
  // const imgUser = "/images/user/user-profile.jpg";
  // const message = "Could you please help me to find it out? 🤔";
  // const time = "6:57";

  return (
    <div className="chat-box">
      {params.userId != "none" && (
        <div className="chat-box-header">
          <div className="user-info">
            <div className="img-user">
              <img src={recipientData[0]?.avatarLink?.imgLink} alt="" />
            </div>
            <div className="content">
              <p className="username">
                {recipientData[0]?.firstName + recipientData[0]?.lastName}
              </p>
              <p className="status mb-0">Activity</p>
            </div>
          </div>
          <div className="more">
            <i class="fa-regular fa-circle-info"></i>
          </div>
        </div>
      )}
      <div className="chat-box-body">
        {conversation &&
          conversation.map((conversation) => (
            <div key={conversation.time}>
              {conversation?.sender?.userId === userData?.id ? (
                <ItemMessageRight
                  imgUser={conversation?.sender?.avatar}
                  time={conversation?.time}
                  message={conversation?.message}
                />
              ) : (
                <ItemMessageLeft
                  imgUser={conversation?.sender?.avatar}
                  time={conversation?.time}
                  message={conversation?.message}
                />
              )}
            </div>
          ))}
      </div>

      <div className="chat-box-footer">
        <div className="box">
          <div className="attach">
            <i class="fa-solid fa-link"></i>
            {/* <i class="fa-solid fa-camera-retro"></i> */}
            <i class="fa-solid fa-image"></i>
            <OutsideClickHandler
              onOutsideClick={() => {
                setPickerVisible(false);
              }}
            >
              <i
                class="fa-solid fa-face-laugh-wink"
                onClick={() => {
                  setPickerVisible(!isPickerVisible);
                }}
              ></i>
              <div className={isPickerVisible ? "d-block emoji-box" : "d-none"}>
                <Picker
                  data={data}
                  previewPosition="none"
                  onEmojiSelect={(e) => {
                    onclickEmoji(e.native);
                  }}
                />
              </div>
            </OutsideClickHandler>
          </div>

          <div className="text-message">
            <form
              className="form-message"
              action=""
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="input-box">
                <input
                  placeholder="Write your message"
                  type="text"
                  className="input-message"
                  name="message"
                  {...register("message", {
                    required: true,
                  })}
                />
                <button className="btn-sent">
                  <i class="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
