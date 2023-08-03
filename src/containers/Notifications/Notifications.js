import BannerHeader from "../../components/BannerHeader/BannerHeader";
import "../Notifications/Notifications.scss";

const Notifications = () => {
  const tableData = [
    {
      imgUser: "/images/user/user-profile.jpg",
      notification: "Marvin McKinney sent you a new private message",
      time: "3 days, 22 hours ago",
      action: {
        read: false,
        delete: false,
      },
    },
    {
      imgUser: "/images/user/user-member.jpg",
      notification: "Marvin McKinney sent you a new private message",
      time: "3 days, 22 hours ago",
      action: {
        read: false,
        delete: false,
      },
    },
    {
      imgUser: "/images/user/user.jpg",
      notification: "Marvin McKinney sent you a new private message",
      time: "3 days, 22 hours ago",
      action: {
        read: false,
        delete: false,
      },
    },
    {
      imgUser: "/images/user/user-profile.jpg",
      notification: "Marvin McKinney sent you a new private message",
      time: "3 days, 22 hours ago",
      action: {
        read: false,
        delete: false,
      },
    },
    {
      imgUser: "/images/user/user-member.jpg",
      notification: "Marvin McKinney sent you a new private message",
      time: "3 days, 22 hours ago",
      action: {
        read: false,
        delete: false,
      },
    },
    {
      imgUser: "/images/user/user.jpg",
      notification: "Marvin McKinney sent you a new private message",
      time: "3 days, 22 hours ago",
      action: {
        read: false,
        delete: false,
      },
    },
  ];

  return (
    <div className="page-notifications container">
      <BannerHeader subject={"All Notifications"} decription={"All notifications about Friend request, Post, Interactions"}/>
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Notifications</th>
              <th>Date Received</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.imgUser}>
                <td>
                  <div className="img-user">
                    <img src={item.imgUser} alt="" />
                  </div>
                </td>
                <td>
                  <div className="notice">
                    <p className="mb-0">{item.notification}</p>
                  </div>
                </td>
                <td>
                  <div className="time">
                    <p className="mb-0">{item.time}</p>
                  </div>
                </td>
                <td>
                  <div className="btn-status">
                    <div className="btn-read">
                      {item.action.read ? (
                        <i class="fa-regular fa-eye"></i>
                      ) : (
                        <i class="fa-regular fa-eye-slash"></i>
                      )}
                    </div>
                    <div className="btn-delete">
                      <i class="fa-regular fa-trash-can"></i>
                    </div>
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

export default Notifications;
