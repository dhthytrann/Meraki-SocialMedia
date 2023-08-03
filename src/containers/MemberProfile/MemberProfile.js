import { useContext, useEffect, useState } from "react";
import TabAbout from "../../components/Profile/ProfileBody/TabContent/TabAbout/TabAbout";
import TabFriends from "../../components/Profile/ProfileBody/TabContent/TabFriends/TabFriends";
import TabGallery from "../../components/Profile/ProfileBody/TabContent/TabGallery/TabGallery";
import TabTimeLine from "../../components/Profile/ProfileBody/TabContent/TabTimeLine/TabTimeLine";
import { DataContext } from "../../context/dataContext";
import "../MemberProfile/MemberProfile.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  checkFriend,
  addFriend,
  getListFriend,
  unFriend,
} from "../../redux/slice/Friend/friendSlice";
import { getAllUser, getUser } from "../../redux/slice/User/userSlice";

const MemberProfile = () => {
  const [memberData, setMemberData] = useState();

  const allUserData = useSelector((state) => state.user?.listAllUser);
  const listFriend = useSelector((state) => state.friend?.listFriend?.data);

  const params = useParams();
  const dispatch = useDispatch();

  const checkIsFriend = useSelector((state) => state.friend?.isFriend);

  const [isFriend, setIsFriend] = useState(checkIsFriend?.status);

  // const [listFriend, setListFriend] = useState(
  //   JSON.parse(localStorage.getItem("listFriend"))
  // );

  const navigate = useNavigate();

  const handleNavigateMessage = () => {
    const idMember = params.memberId;
    navigate(`/message/${idMember}`);
  };

  const handleAddFriend = () => {
    try {
      const friendId = params.memberId;
      dispatch(
        addFriend({
          friendId,
        })
      );
      setIsFriend(true);
    } catch (error) {}
  };

  const handleUnFriend = () => {
    try {
      const friendId = params.memberId;
      dispatch(
        unFriend({
          friendId,
        })
      );
      setIsFriend(false);
    } catch (error) {}
  };

  useEffect(() => {
    const friendId = params.memberId;
    dispatch(
      checkFriend({
        friendId,
      })
    );
    setIsFriend(checkIsFriend?.status);

    const idMember = params.memberId;
    const indexList = idMember - 1;
    setMemberData(allUserData[indexList]);

    //Render List Friend
    const idUser = idMember;
    dispatch(
      getListFriend({
        idUser,
      })
    );
  }, []);

  //const profileOwner = 1;
  return (
    <div className="page-member-profile">
      <div className="profile-header  container p-0">
        <div className="banner-cover">
          <div className="background-image">
            <img src="/images/background/banner-01.jpg" alt="" />
            <div className="blur"></div>
          </div>
          <div className="container">
            <div className="user-profile">
              <div className="img-user">
                <div className="img-url">
                  <img src={memberData?.avatarLink?.imgLink} alt="" />
                </div>
              </div>
              <div className="profile-detail">
                <div className="profile-name">
                  <div className="username">
                    <p className="text-white mb-0">
                      {memberData?.firstName + memberData?.lastName}
                    </p>
                  </div>
                  <div className="email-address">
                    <span className="text-white">{memberData?.email}</span>
                  </div>
                </div>
                <div className="profile-interaction">
                  <ul className="list-social-link mb-0">
                    <li className="pr-3 facebook">
                      <a href="#">
                        <i class="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="pr-3 instagram">
                      <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li className="pr-3 google">
                      <a href="#">
                        <i class="fa-brands fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li className="pr-3 dribble">
                      <a href="#">
                        <i class="fa-regular fa-basketball"></i>
                      </a>
                    </li>
                    <li className="pr-3 youtube">
                      <a href="#">
                        <i class="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="connect">
                    {isFriend ? (
                      <div className="friend-ship list-btn">
                        <div
                          className="btn-connect "
                          onClick={() => {
                            handleUnFriend();
                          }}
                        >
                          <p className="mb-0">Unfollow</p>
                        </div>
                        <div
                          className="btn-message"
                          onClick={() => {
                            handleNavigateMessage();
                          }}
                        >
                          <i class="bi bi-messenger"></i>
                        </div>
                      </div>
                    ) : (
                      <div className="stranger list-btn">
                        <div
                          className="btn-connect"
                          onClick={() => {
                            handleAddFriend();
                          }}
                        >
                          <p className="mb-0">Follow</p>
                        </div>
                        <div
                          className="btn-message"
                          onClick={() => {
                            handleNavigateMessage();
                          }}
                        >
                          <i class="bi bi-messenger"></i>
                        </div>
                      </div>
                    )}
                    {/* {profileOwner == 2 && (
                      <div className="friend-request list-btn">
                        <div className="btn-connect btn-cancel-request">
                          <p className="mb-0">Cancel Request</p>
                        </div>
                        <Link to="chat/:memberId" className="btn-message">
                          <i class="bi bi-messenger"></i>
                        </Link>
                      </div>
                    )} */}
                    {/* {profileOwner == 2 && (
                      <div className="friend-ship list-btn">
                        <div className="btn-connect btn-unfriend">
                          <p className="mb-0">Unfollow</p>
                        </div>
                        <Link to="chat/:memberId" className="btn-message">
                          <i class="bi bi-messenger"></i>
                        </Link>
                      </div>
                    )} */}
                    {/* {profileOwner == 4 && (
                      <div className="confirm-request list-btn">
                        <div className="btn-connect btn-confirm">
                          <p className="mb-0">Confirm</p>
                        </div>
                        <div className="btn-connect btn-reject">
                          <p className="mb-0">Delete</p>
                        </div>
                        <Link to="chat/:memberId" className="btn-message">
                          <i class="bi bi-messenger"></i>
                        </Link>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-body container">
        <div className="menu row ml-0 mr-0">
          <div className="tab-menu col-md-12 col-lg-8">
            <ul class="nav">
              <li className="tab-timeline">
                <div
                  className="btn-tab-timeline nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#timeline-tab-pane"
                  aria-selected="true"
                >
                  Time line
                </div>
              </li>
              <li className="tab-about">
                <div
                  className="btn-tab-about nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#about-tab-pane"
                >
                  About
                </div>
              </li>
              <li className="tab-friends">
                <div
                  className="btn-tab-friends nav-link "
                  data-bs-toggle="tab"
                  data-bs-target="#friends-tab-pane"
                >
                  Friends
                </div>
              </li>
              <li className="tab-gallery">
                <div
                  className="btn-tab-gallery nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#gallery-tab-pane"
                >
                  Gallery
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-content">
          <TabTimeLine userPostData={memberData} />
          <TabAbout
            userName={memberData?.firstName + memberData?.lastName}
            birthday={memberData?.birthday}
            gender={memberData?.gender}
            address={memberData?.address}
          />
          <TabFriends listFriend={listFriend} />
          <TabGallery listImage={memberData?.images} />
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
