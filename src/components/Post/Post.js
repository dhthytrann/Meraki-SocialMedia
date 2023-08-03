import { useEffect, useState } from "react";
import CardBody from "./CardBody/CardBody";
import CardFooter from "./CardFooter/CardFooter";
import CardTitle from "./CardTitle/CardTitle";
import { useDispatch } from "react-redux";
import { getNewFeed } from "../../redux/slice/NewFeed/newFeedSlice";

const Post = ({
  idPost,
  imgUser,
  userPost,
  imgUserPost,
  activity,
  time,
  status,
  imgPost,
  listComment,
}) => {
  const userNamePost = userPost?.firstName + userPost?.lastName;
  //const imgUserPost = userPost?.avatarLink?.imgLink;


  return (
    <div className="post col-sm-12">
      <div className="card-post">
        <CardTitle
          idPost={idPost}
          imgUser={imgUserPost}
          userName={userNamePost}
          activity={activity}
          time={time}
        />
        <CardBody status={status} imgPost={imgPost} />
        <CardFooter
          idPost={idPost}
          imgUser={imgUser}
          listComment={listComment}
        />
      </div>
    </div>
  );
};

export default Post;
