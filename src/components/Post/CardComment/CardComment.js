import { useForm } from "react-hook-form";
import "../CardComment/CardComment.scss";
import ItemComment from "./ItemComment/ItemComment";
import { useContext } from "react";
import { DataContext } from "../../../context/dataContext";
import { postComment } from "../../../redux/slice/Comment/commentSlice";
import { useDispatch } from "react-redux";
import { getUser } from "../../../redux/slice/User/userSlice";

const CardComment = ({ idPost, imgUser, listComment }) => {
  //list comment => render..............

  ///////////////////////////////////////////////////

  const { userData } = useContext(DataContext);
  const dispatch = useDispatch();

  const postId = idPost;

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const { content } = data;
    dispatch(
      postComment({
        postId,
        content,
      })
    );

    reset({
      content: "",
    });
  };

  // console.log("listcomment", listComment);

  return (
    <div className="card-comment collapse" id="collapseComment">
      <form onSubmit={handleSubmit(onSubmit)} className="comment-box">
        <div className="img-user">
          <img src={imgUser} alt="" />
        </div>
        <input
          type="text"
          className="comment-input"
          placeholder="Write a Comment..."
          {...register("content")}
        />
        <button className="btn-send-comment">
          <i class="fa-light fa-paper-plane"></i>
        </button>
      </form>
      <div className="list-comment">
        <ul className="mb-0">
          {listComment &&
            listComment.map((comment) => {
              return (
                <ItemComment
                  key={comment.id}
                  idComment={comment.id}
                  userComment={comment.userComment}
                  timeCmt={comment.createTime}
                  contentCmt={comment.content}
                />
              );

              //   return (
              //     <li key={comment.id} className="item-comment">
              //       <div className="info-comment">
              //         <div className="img-user">
              //           <img src={comment.user?.avatarLink?.imgLink} alt="" />
              //         </div>
              //         <div className="username">
              //           <h6>
              //             {comment.user?.firstname + comment.user?.lastname}
              //           </h6>
              //         </div>
              //         <div className="time">
              //           <p className="mb-0">replied {comment.createTime} ago</p>
              //         </div>
              //       </div>
              //       <div className="content-comment">
              //         <span>{comment.content}</span>
              //       </div>
              //       {/* {commentOwner == "me" && (
              //   <div className="bottom">
              //     <ul className="mb-0">
              //       <li>
              //         <p className="mb-0">Edit</p>
              //       </li>
              //       <li>
              //         <p className="mb-0">Delete</p>
              //       </li>
              //     </ul>
              //   </div>
              // )} */}
              //     </li>
              //   );
            })}
        </ul>
      </div>
    </div>
  );
};

export default CardComment;
