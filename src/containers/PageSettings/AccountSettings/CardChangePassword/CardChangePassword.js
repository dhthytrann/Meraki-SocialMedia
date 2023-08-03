import { useForm } from "react-hook-form";
import "../CardChangePassword/CardChangePassword.scss";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../../../redux/slice/Account/accountSlice";
import { DataContext } from "../../../../context/dataContext";
import { message } from "antd";
import { getAllUser, getUser } from "../../../../redux/slice/User/userSlice";

const CardChangePassword = () => {
  const statusChangePassword = useSelector(
    (state) => state.account?.currentAccount?.status
  );
  const messageChangePassword = useSelector(
    (state) => state.account?.currentAccount?.message
  );

  const checkCurrentAccount = useSelector(
    (state) => state.account?.currentAccount
  );

  const [err, setErr] = useState();

  const dispatch = useDispatch();
  // const { userData } = useContext(DataContext);
  const userData = useSelector((state) => state.user?.currentUser);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { password, newpassword } = data;

    const email = userData?.email;
    const oldPassword = password;
    const newPassword = newpassword;
    dispatch(
      changePassword({
        email,
        oldPassword,
        newPassword,
      })
    );
  };

  // useEffect(() => {
  //   dispatch(getUser());
  //   dispatch(getAllUser());
  // }, [changePassword]);

  return (
    <div className="card-change-password">
      <div className="title">
        <h5>Change Password</h5>
      </div>
      <div className="body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="group-input form-floating">
            <input
              id="passwordInput"
              className="form-control"
              placeholder="Password"
              type="password"
              {...register("password", { required: true })}
            />
            <label for="passwordInput">Current Password</label>
            {errors.password?.type === "required" && (
              <span className="err-msg">Password is required</span>
            )}
          </div>
          <div className="group-input form-floating">
            <input
              id="newpasswordInput"
              className="form-control"
              placeholder="New Password"
              type="password"
              {...register("newpassword", { required: true, minLength: 8 })}
            />
            <label for="newpasswordInput">New Password</label>
            {errors.newpassword?.type === "required" && (
              <span className="err-msg">Password is required</span>
            )}
            {errors.newpassword?.type === "minLength" && (
              <span className="err-msg">
                Password should be at least 8 characters
              </span>
            )}
          </div>
          <div className="group-input form-floating">
            <input
              id="confirmpasswordInput"
              className="form-control"
              placeholder="Confirm New Password"
              type="password"
              {...register("confirmpassword", {
                required: true,
                validate: (value) => {
                  const newPassword = getValues("newpassword");
                  if (value !== newPassword) {
                    return "Password is not matched!";
                  }
                },
              })}
            />
            <label for="confirmpasswordInput">Confirm New Password</label>
            {errors.confirmpassword?.type === "required" && (
              <span className="err-msg">Password is required</span>
            )}
            {errors.confirmpassword?.message && (
              <span className="err-msg">{errors.confirmpassword?.message}</span>
            )}
          </div>
          <div className="footer pt-3">
            <button className="btn-save-change">
              <p className="mb-0">SAVE CHANGES</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardChangePassword;
