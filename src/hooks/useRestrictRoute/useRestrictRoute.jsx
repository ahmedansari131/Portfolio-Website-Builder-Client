import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const useRestrictRoute = (data) => {
  const location = useLocation();
  const navigate = useNavigate();
  const restrictedPaths = ["/signin", "/signup"];

  useEffect(() => {
    if (data?.success) {
      if (restrictedPaths.includes(location.pathname)) {
        navigate("/", { replace: true });
      }
    }
  }, [location, data]);
};

export default useRestrictRoute;
