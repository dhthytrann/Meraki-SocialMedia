import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import Login from "../containers/Auth/Login/Login";
import Register from "../containers/Auth/Register/Register";

import Profile from "../containers/Profile/Profile";
import AuthLayout from "../layout/auth-layout";
import Default from "../layout/default";
import PrivateRoute from "../routes/PrivateRoute";
import MemberProfile from "../containers/MemberProfile/MemberProfile";
import Notfound from "../containers/Notfound/Notfound";
import PageSettings from "../containers/PageSettings/PageSettings";
import {
  MEMBER_PAGE,
  PROFILE_PAGE,
  SETTINGS_PAGE,
  NOTIFICATIONS_PAGE,
  MESSAGE_PAGE,
} from "../settings/constant";
import VerifyPage from "../containers/Auth/VerifyPage/VerifyPage";
import ForgotPassword from "../containers/Auth/ForgotPassword/ForgotPassword";
import Notifications from "../containers/Notifications/Notifications";
import Messages from "../containers/Messages/Messages";
import { getAllUser, getUser } from "../redux/slice/User/userSlice";
import { DataContext } from "../context/dataContext";
import { useDispatch, useSelector } from "react-redux";
import PrivateAdmin from "./PrivateAdmin";
import AdminPage from "../containers/AdminPage/AdminPage";

const HomePage = React.lazy(() => import("../containers/Home/Home"));
const DefaultLayout = React.lazy(() => import("../layout/default"));

const AppRoutes = () => {
  return (
    <Routes>
      {/* ADMIN */}
      {/* <Route
        path="/admin-page"
        element={
          <PrivateRoute>
            <AdminPage />
          </PrivateRoute>
        }
      /> */}

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="verify" element={<VerifyPage />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>

      {/* INDEX */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <React.Suspense fallback={<Loader />}>
              <DefaultLayout />
            </React.Suspense>
          </PrivateRoute>
        }
      >
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loader />}>
              <HomePage />
            </React.Suspense>
          }
        />
        <Route
          path={PROFILE_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <Profile />
            </React.Suspense>
          }
        />
        <Route
          path={MEMBER_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <MemberProfile />
            </React.Suspense>
          }
        />

        <Route
          path={SETTINGS_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <PageSettings />
            </React.Suspense>
          }
        />

        <Route
          path={NOTIFICATIONS_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <Notifications />
            </React.Suspense>
          }
        />

        <Route
          path={MESSAGE_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <Messages />
            </React.Suspense>
          }
        />
      </Route>

      <Route path="*" element={<Notfound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
