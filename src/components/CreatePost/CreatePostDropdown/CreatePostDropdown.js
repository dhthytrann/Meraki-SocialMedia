import { useEffect, useState } from "react";
import { createPost } from "../../../redux/slice/Post/postSlice";
import { useDispatch, useSelector } from "react-redux";
import "../CreatePostDropdown/CreatePostDropdown.scss";
import { getAllUser, getUser } from "../../../redux/slice/User/userSlice";
import { getNewFeed } from "../../../redux/slice/NewFeed/newFeedSlice";

const CreatePostDropdown = ({ userName, imgUser }) => {
  // const [image, setImage] = useState(null);
  // const [fileName, setFileName] = useState("No selected file");
  const [postContent, setPostContent] = useState(null);

  const [picture, setPicture] = useState(null);

  const uploadPicture = (e) => {
    setPicture({
      picturePreview: URL.createObjectURL(e.target.files[0]), //show
      pictureAsFile: e.target.files[0],
    });
    // console.log(e.target.files[0]);
  };

  // const currentPost = useSelector((state) => state.post?.currentPost);

  const dispatch = useDispatch();

  const handleCreatePost = () => {
    dispatch(
      createPost({
        postContent,
        picture,
      })
    );
    // if (currentPost?.status === true) {
    //   setPostContent("");
    //   setPicture(null);
    // }
  };

  return (
    <div
      className="create-post-dropdown modal fade"
      id="createModalToggle"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
              Create Post
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form action="#">
              <div class="info-user">
                <img src={imgUser} alt="logo" />
                <div class="details">
                  <h5>{userName}</h5>
                  <div class="privacy">
                    <i class="fas fa-user-friends"></i>
                    <span>Friends</span>
                    <i class="fas fa-caret-down"></i>
                  </div>
                </div>
              </div>
              <div className="content">
                <textarea
                  placeholder={"What's on your mind, " + userName + " ?"}
                  spellcheck="false"
                  required
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                ></textarea>
                <div
                  className="upload-image"
                  onClick={() => document.querySelector(".input-filed").click()}
                >
                  <input
                    type="file"
                    accept="image/*"
                    className="input-filed"
                    hidden
                    onChange={uploadPicture}
                  />

                  {picture ? (
                    <div className="img-upload">
                      <img src={picture.picturePreview} />
                    </div>
                  ) : (
                    <div className="add-files">
                      <div className="title">
                        <div className="img-gallery">
                          <img src="/images/icon/iconly/upload.png" alt="" />
                        </div>
                        <h6>Add photos/videos</h6>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              className={
                postContent || picture
                  ? "btn-post btn-post-enable"
                  : "btn-post btn-post-unable"
              }
              onClick={handleCreatePost}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostDropdown;
