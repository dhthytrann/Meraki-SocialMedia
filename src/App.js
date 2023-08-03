import { AuthContext } from "./context/authContext";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "./context/userContext";
import { getAllUser, getUser } from "./redux/slice/User/userSlice";
import { DataContext } from "./context/dataContext";
import { setLocalStorage } from "./redux/api/setLocalStorage";
import { getNewFeed } from "./redux/slice/NewFeed/newFeedSlice";

function App() {
  const currentUser = useSelector((state) => state.user?.currentUser);
  const listAllUser = useSelector((state) => state.user?.listAllUser);

  const currentNewFeed = useSelector(
    (state) => state.newFeed.currentNewFeed?.data
  );

  const [isAuth, setAuth] = useState(false);

  const dispatch = useDispatch();

  //Data Featch API
  const [userData, setUserData] = useState(currentUser);
  const [allUserData, setAllUserData] = useState([
    JSON.parse(localStorage.getItem("allUserData")),
  ]);
  const [galleryData, setGalleryData] = useState([]);
  const [accountData, setAccountData] = useState();
  const [authData, setAuthData] = useState();
  const [tokenData, setTokenData] = useState();
  const [postData, setPostData] = useState([]);
  const [newFeedData, setNewFeedData] = useState(
    JSON.parse(localStorage.getItem("newFeedData"))
  );

  const [isDispatch, setIsDispatch] = useState(false);

  // useEffect(() => {
  //   dispatch(getNewFeed());
  //   dispatch(getAllUser());
  //   dispatch(getUser());
  // },[]);

  // useEffect(() => {
  //   try {
  //     setUserData(JSON.parse(localStorage.getItem("userData")));
  //     setAllUserData(JSON.parse(localStorage.getItem("allUserData")));
  //     setNewFeedData(JSON.parse(localStorage.getItem("newFeedData")));
  //   } catch (error) {}
  // });

  return (
    <>
      <AuthContext.Provider value={[isAuth, setAuth]}>
        <DataContext.Provider
          value={{
            isDispatch,
            setIsDispatch,

            userData,
            setUserData,

            allUserData,
            setAllUserData,

            accountData,
            setAccountData,

            authData,
            setAuthData,

            tokenData,
            setTokenData,

            postData,
            setPostData,

            galleryData,
            setGalleryData,

            newFeedData,
            setNewFeedData,
          }}
        >
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </DataContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
