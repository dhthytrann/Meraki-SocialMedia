import Header from "../containers/Layout/Header/Header";
import Sidebar from "../containers/Layout/Sidebar/Sidebar";
import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../containers/Layout/Footer/Footer";
import useWindowSize from "../library/hooks/useWindowSize";
import FooterMobile from "../containers/Layout/Footer/FooterMobile/FooterMobile";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, getUser } from "../redux/slice/User/userSlice";
import { DataContext } from "../context/dataContext";
import { getNewFeed } from "../redux/slice/NewFeed/newFeedSlice";

const Default = () => {
  // const {
  //   userData,
  //   setUserData,
  //   allUserData,
  //   setAllUserData,
  //   setNewFeedData,
  //   isDispatch,
  // } = useContext(DataContext);

  const [toggle, setToggle] = useState(false); //open
  const userData = useSelector((state) => state.user?.currentUser);

  const handleToggleSidebar = () => {
    setToggle(!toggle);
  };

  const { width } = useWindowSize();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   try {
  //     setUserData(JSON.parse(localStorage.getItem("userData")));
  //     setAllUserData(JSON.parse(localStorage.getItem("allUserData")));
  //     setNewFeedData(JSON.parse(localStorage.getItem("newFeedData")))
  //   } catch (error) {}
  // });

  // useEffect(() => {
  //   if (isDispatch === true) {
  //     dispatch(getNewFeed());
  //     //setNewFeedData(JSON.parse(localStorage.getItem("newFeedData")));
  //     dispatch(getAllUser());
  //     //setAllUserData(JSON.parse(localStorage.getItem("allUserData")));
  //     dispatch(getUser());
  //     //setUserData(JSON.parse(localStorage.getItem("userData")));
  //   }
  // }, [isDispatch]);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      <div className="page">
        {width > 992 && (
          <div
            className={
              toggle
                ? "sidebar sidebar-in animate-fade-in-left"
                : "sidebar sidebar-out animate-fade-in-right"
            }
          >
            <div className="btn-sidebar-toggle sidebar-toggle">
              <div
                className="menu-btn"
                onClick={() => {
                  handleToggleSidebar();
                }}
              >
                {toggle ? (
                  <i class="fa-light fa-angle-left"></i>
                ) : (
                  <i class="fa-light fa-angle-right"></i>
                )}
              </div>
            </div>
            <Sidebar userData={userData} />
          </div>
        )}
        {width > 992 ? (
          <div
            className={toggle ? "main-content ml-270" : "main-content ml-100"}
          >
            <Header />
            <div className="content-page">
              {/* <DefaultRouter /> */}
              <Outlet />
            </div>
            {width > 992 ? <Footer /> : <FooterMobile />}
          </div>
        ) : (
          <div className="main-content ">
            <Header />
            <div className="content-page">
              {/* <DefaultRouter /> */}
              <Outlet />
            </div>
            {width > 992 ? <Footer /> : <FooterMobile />}
          </div>
        )}
      </div>
    </>
  );
};

export default Default;

//  <div className={toggle ? "main-content ml-270" : "main-content ml-100"}>
