import { Link } from "react-router-dom";
import CreatePost from "../../../../../components/CreatePost/CreatePost";
import Post from "../../../../../components/Post/Post";
import "../TabTimeLine/TabTimeLine.scss";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../../../../../redux/slice/Post/postSlice";
import { DataContext } from "../../../../../context/dataContext";
import { getUser } from "../../../../../redux/slice/User/userSlice";

const TabTimeLine = ({ userPostData }) => {
  const activity = "posted an update status";

  // const { userData } = useContext(DataContext);
  const userData = useSelector((state) => state.user?.currentUser);

  const userName = userData?.firstName + userData?.lastName;
  const postData = userPostData?.posts;

  return (
    <div class="tab-pane fade show active" id="timeline-tab-pane">
      <div className="row">
        <div className="left-content col-lg-4">
          <div className="card-gallery">
            <div className="title">
              <h5>Gallery</h5>
              <Link to="/dashboard/profile#">
                <p className="mb-0">View more</p>
              </Link>
            </div>
            <div className="list-images">
              <div className="item-image">
                <img src="/images/gallery/1.jpg" alt="" />
              </div>
              <div className="item-image">
                <img src="/images/gallery/2.jpg" alt="" />
              </div>
              <div className="item-image">
                <img src="/images/gallery/3.jpg" alt="" />
              </div>
              <div className="item-image">
                <img src="/images/gallery/4.jpg" alt="" />
              </div>
              <div className="item-image">
                <img src="/images/gallery/5.jpg" alt="" />
              </div>
              <div className="item-image">
                <img src="/images/gallery/6.jpg" alt="" />
              </div>
              <div className="item-image">
                <img src="/images/gallery/7.jpg" alt="" />
              </div>
              <div className="item-image">
                <img src="/images/gallery/2.jpg" alt="" />
              </div>
              <div className="item-image">
                <img src="/images/gallery/1.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="card-list-friend">
            <div className="title">
              <h5>Friends</h5>
              <Link to="/dashboard/profile#">
                <p className="mb-0">View more</p>
              </Link>
            </div>
            <div className="list-friend">
              <div className="item-friend">
                <img src="/images/user/user-profile.jpg" alt="" />
                <p className="mb-0">Jenny Wilson</p>
              </div>
              <div className="item-friend">
                <img src="/images/user/06.jpg" alt="" />
                <p className="mb-0">Philip Ninomar</p>
              </div>
              <div className="item-friend">
                <img src="/images/user/07.jpg" alt="" />
                <p className="mb-0">Iris Cana</p>
              </div>
              <div className="item-friend">
                <img src="/images/user/08.jpg" alt="" />
                <p className="mb-0">Cana Diket</p>
              </div>
              <div className="item-friend">
                <img src="/images/user/09.jpg" alt="" />
                <p className="mb-0">Cris Wilson</p>
              </div>
              <div className="item-friend">
                <img src="/images/user/10.jpg" alt="" />
                <p className="mb-0">Anana Crew</p>
              </div>
              <div className="item-friend">
                <img src="/images/user/user-05.jpg" alt="" />
                <p className="mb-0">Anana Zona</p>
              </div>
              <div className="item-friend">
                <img src="/images/user/user-03.jpg" alt="" />
                <p className="mb-0">Anana Zona</p>
              </div>
              <div className="item-friend">
                <img src="/images/user/09.jpg" alt="" />
                <p className="mb-0">Anana Zona</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-content list-user-post col-lg-8  m-0 ">
          <CreatePost
            userName={userName}
            imgUser={userData?.avatarLink?.imgLink}
          />
          <div className="list-post-time-line">
            {postData &&
              postData
                .map((post) => (
                  <Post
                    key={post.id}
                    imgUser={userData?.avatarLink?.imgLink}
                    idPost={post.id}
                    userPost={userPostData}
                    imgUserPost={userPostData?.avatarLink?.imgLink}
                    activity={activity}
                    time={post.createDate}
                    status={post.content}
                    imgPost={post?.images?.imgLink}
                    listComment={post.commentList}
                  />
                ))
                .reverse()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabTimeLine;
