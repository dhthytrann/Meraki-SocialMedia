import { useForm } from "react-hook-form";
import "../CardAccountInformation/CardAccountInformation.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../../redux/slice/Account/accountSlice";
import { useContext, useEffect } from "react";
import { DataContext } from "../../../../context/dataContext";
import { getAllUser, getUser } from "../../../../redux/slice/User/userSlice";

const CardAccountInformation = () => {
  // const {userData, setUserData}  = useContext(DataContext);
  const userData = useSelector((state) => state.user?.currentUser);

  const dispatch = useDispatch();

  const initialValues = {
    firstname: `${userData?.firstName}`,
    lastname: `${userData?.lastName}`,
    email: `${userData?.email}`,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });

  const onSubmit = (data) => {
    const { firstname, lastname, email } = data;

    const id = userData?.id;

    const firstName = firstname;
    const lastName = lastname;

    dispatch(
      updateUser({
        id,
        firstName,
        lastName,
        email,
      })
    );
  };

  // useEffect(() => {
  //   dispatch(getUser());
  // },[])

  return (
    <div className="card-account-information">
      <div className="title">
        <h5>Account Information</h5>
      </div>
      <div className="body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex box-name">
            <div className="group-input form-floating mr-2">
              <textarea
                id="firstnameInput"
                className="form-control"
                placeholder="First Name"
                type="text"
                {...register("firstname")}
              />
              <label for="firstnameInput">First Name</label>
            </div>
            <div className="group-input form-floating">
              <textarea
                id="lastnameInput"
                className="form-control"
                placeholder="Last Name"
                type="text"
                {...register("lastname")}
              />
              <label for="lastnameInput">Last Name</label>
            </div>
          </div>
          <div className="group-input form-floating">
            <textarea
              id="emailInput"
              className="form-control"
              placeholder="Email Address"
              type="text"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  //   message: "invalid email address",
                },
              })}
            />
            <label for="emailInput">Email</label>
            {errors.email?.type === "required" && (
              <span className="err-msg">Email Address is required</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="err-msg">Invalid Email Address</span>
            )}
          </div>
          <div className="group-input form-floating">
            <textarea
              id="phonenumberInput"
              className="form-control"
              placeholder="Phone Number"
              type="number"
              {...register("phonenumber")}
            />
            <label for="phonenumberInput">Phone Number</label>
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

export default CardAccountInformation;
