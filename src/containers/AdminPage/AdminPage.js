import { useContext, useEffect } from "react";
import BannerHeader from "../../components/BannerHeader/BannerHeader";
import "../AdminPage/AdminPage.scss";
import { DataContext } from "../../context/dataContext";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { getAllUser, logout } from "../../redux/slice/User/userSlice";

const AdminPage = () => {
  // const { allUserData, setAllUserData } = useContext(DataContext);

  const allUserData = useSelector((state) => state.user?.listAllUser);

  const filterAllUser = allUserData.filter((val) => val.role === "USER");

  const listUser = [...filterAllUser];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  return (
    <div className="page-admin container">
      <BannerHeader
        subject={"Welcom to Admin Page"}
        decription={"Admin Roles for User Account Management"}
      />
      <div className="content">
        <div className="title">
          <p className="mb-3">Manage Users</p>
          <div
            className="btn-logout"
            onClick={() => {
              handleLogout();
            }}
          >
            <p className="mb-3">Logout</p>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Profile</th>
              <th>Email</th>
              <th>Enable</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listUser &&
              listUser.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="profile">
                      <div className="img-user">
                        <img src={user?.avatarLink?.imgLink} alt="" />
                      </div>
                      <p className="username mb-0">
                        {user?.firstName + user?.lastName}
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="email">
                      <p className="mb-0">{user?.email}</p>
                    </div>
                  </td>
                  <td>
                    <div className="enable">
                      <p className="mb-0">
                        {user?.enabled ? "active" : "inactive"}
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="btn-status">
                      <div className="btn-read">
                        {user?.enabled ? (
                          <i class="fa-regular fa-eye"></i>
                        ) : (
                          <i class="fa-regular fa-eye-slash"></i>
                        )}
                      </div>
                      {/* <div className="btn-delete">
                        <i class="fa-regular fa-trash-can"></i>
                      </div> */}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
