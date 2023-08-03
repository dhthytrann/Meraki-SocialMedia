import { useState } from "react";
import CardComment from "../CardComment/CardComment";
import "../CardFooter/CardFooter.scss";

const CardFooter = ({ idPost, imgUser, listComment }) => {
  const [likePost, setLikePost] = useState(false);
  const [collapseComment, setCollapseComment] = useState(false);

  const handleClickLikePost = () => {
    setLikePost(!likePost);
  };

  const handleClickCollapseComment = () => {
    setCollapseComment(!collapseComment);
  };
  

  return (
    <div className="card-footer">
      <div className="interactions">
        <div
          className="likes"
          onClick={() => {
            handleClickLikePost();
          }}
        >
          {likePost ? (
            <img src="/images/icon/iconly/heart-bold.png" alt="" />
          ) : (
            <img src="/images/icon/iconly/heart-light.png" alt="" />
          )}
          <p className="mb-0">Love</p>
        </div>
        <div
          className="comments"
          data-bs-toggle="collapse"
          data-bs-target="#collapseComment"
          aria-expanded="false"
          onClick={() => {
            handleClickCollapseComment();
          }}
        >
          <img src="/images/icon/iconly/comment.png" alt="" />
          <p className="mb-0">Comment</p>
        </div>
      </div>
      <CardComment idPost={idPost} imgUser={imgUser} listComment={listComment} />
    </div>
  );
};

export default CardFooter;
