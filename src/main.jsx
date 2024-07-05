import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./app/store/store.js";
import { Provider } from "react-redux";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  Settings,
  DirectSignin,
  Editor,
  Landing,
  ResetForgotPassword,
  Signin,
  Signup,
  VerifyEmail,
  Dashboard,
  Account,
  PortfolioProjects,
} from "./pages/index.js";
import { ProtectedRoutes } from "./components/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route
          path="/reset-forgot-password/:uid/:token"
          element={<ResetForgotPassword />}
        />
        <Route
          path="/direct-signin/:uid/:signin_token"
          element={<DirectSignin />}
        />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="editor" element={<Editor />} />
      </Route>
      <Route path="settings" element={<Settings />}>
        <Route element={<ProtectedRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="account" element={<Account />} />
          <Route path="portfolio-projects" element={<PortfolioProjects />} />
        </Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
