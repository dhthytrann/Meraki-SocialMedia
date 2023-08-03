import { useEffect, useState } from "react";
import "../CardChangeAvatar/CardChangeAvatar.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAvatar,
  updateUser,
} from "../../../../redux/slice/Account/accountSlice";
import { getAllUser, getUser } from "../../../../redux/slice/User/userSlice";
import { message } from "antd";

const CardChangeAvatar = () => {
  const [image, setImage] = useState(null);

  const [fileName, setFileName] = useState("No selected file");

  const [picture, setPicture] = useState(null);

  const dispatch = useDispatch();

  const currentAccount = useSelector((state) => state.account.currentUser);

  const saveChangeAvatar = () => {
    console.log(image);
    dispatch(
      updateAvatar({
        picture,
      })
    );
  };

  const uploadPicture = (e) => {
    setPicture({
      picturePreview: URL.createObjectURL(e.target.files[0]), //show
      pictureAsFile: e.target.files[0],
    });
    // console.log(e.target.files[0]);
  };


  return (
    <div className="card-change-avatar">
      <div className="title">
        <h5>Change Avatar Photo</h5>
      </div>
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
          // onChange={({ target: { files } }) => {
          //   files[0] && setFileName(files[0].name);
          //   if (files) {
          //     setImage(URL.createObjectURL(files[0]));
          //   }
          // }}
        />

        {picture ? (
          <div className="img-upload">
            <img src={picture.picturePreview} />
          </div>
        ) : (
          <div className="add-files">
            <div className="title-files">
              <div className="img-gallery">
                <img src="/images/icon/iconly/upload.png" alt="" />
              </div>
              <h5>Select your photo</h5>
            </div>
          </div>
        )}
      </div>
      <div className="footer">
        <div
          className="btn-save-change"
          onClick={() => {
            saveChangeAvatar();
          }}
        >
          <p className="mb-0">SAVE CHANGES</p>
        </div>
      </div>
    </div>
  );
};

export default CardChangeAvatar;
