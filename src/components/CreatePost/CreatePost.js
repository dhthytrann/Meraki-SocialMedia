import { useContext, useState } from "react";
import "../CreatePost/CreatePost.scss";
import CreatePostDropdown from "./CreatePostDropdown/CreatePostDropdown";
import "./CreatePostDropdown/CreatePostDropdown.scss";

import { DataContext } from "../../context/dataContext";

const CreatePost = ({ userName, imgUser }) => {
  //col-sm-12
  return (
    <div className="create-post">
      <div
        className="card-create-post"
        data-bs-target="#createModalToggle"
        data-bs-toggle="modal"
      >
        <div className="card-body">
          <div className="img-user">
            <img
              src={imgUser ? imgUser : "/images/default-avatar.jpg"}
              alt=""
            />
          </div>
          <form action="#" className="status-box">
            <input
              type="text"
              className="status-input"
              placeholder={
                userName
                  ? "What's on your mind, " + userName + " ?"
                  : "What's on your mind, " + "User Meraki" + " ?"
              }
            />
          </form>
        </div>
        <div className="card-footer">
          <ul className="list-btn p-0">
            <li>
              <img src="/images/icon/icons/gallery.svg" alt="gallery" />
              <span>Photo/Video</span>
            </li>
            <li>
              <img src="/images/icon/icons/emoji.svg" alt="gallery" />
              <span>Feeling/Activity</span>
            </li>
            <li>
              <img src="/images/icon/icons/tag.svg" alt="gallery" />
              <span>TagFriends</span>
            </li>
            <li className="more">
              <div className="img-more">
                <img src="/images/icon/icons/more.svg" alt="gallery" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <CreatePostDropdown
        userName={userName ? userName : "User Meraki"}
        imgUser={imgUser ? imgUser : "/images/default-avatar.jpg"}
      />
    </div>
  );
};

export default CreatePost;
