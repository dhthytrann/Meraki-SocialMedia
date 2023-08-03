import { useDispatch, useSelector } from "react-redux";
import "../ItemComment/ItemComment.scss";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../context/dataContext";
import { all } from "axios";

const ItemComment = ({ idComment, userComment, timeCmt, contentCmt }) => {
  const { allUserData } = useContext(DataContext);

  

  const imgUserCmt = userComment?.avatar;
  const userNameCmt = userComment?.firstName + userComment?.lastName;

  const commentOwner = "me";
  timeCmt = timeCmt.slice(0, 10);

  

  return (
    <li className="item-comment">
      <div className="info-comment">
        <div className="img-user">
          <img src={imgUserCmt} alt="" />
        </div>
        <div className="username">
          <h6>{userNameCmt}</h6>
        </div>
        <div className="time">
          <p className="mb-0">replied {timeCmt}</p>
        </div>
      </div>
      <div className="content-comment">
        <span>{contentCmt}</span>
      </div>
      {/* {commentOwner == "me" && (
        <div className="bottom">
          <ul className="mb-0">
            <li>
              <p className="mb-0">Edit</p>
            </li>
            <li>
              <p className="mb-0">Delete</p>
            </li>
          </ul>
        </div>
      )} */}
    </li>
  );
};

export default ItemComment;
