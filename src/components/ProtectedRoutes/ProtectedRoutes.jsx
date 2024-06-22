import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGetUserQuery } from "../../services/api/authApi";

const ProtectedRoutes = () => {
  const { data, isFetching } = useGetUserQuery();

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return data?.success ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoutes;
