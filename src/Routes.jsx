import React, { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";

// Pages
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/user/Profile";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

// Auth Context
import { useAuth } from "./authContext";

const ProjectRoutes = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const userIdFromStorage = localStorage.getItem("userId");

    if (!userIdFromStorage) {
      // If user is not authenticated, navigate to the auth page
      navigate("/auth");
    } else {
      // Set current user from localStorage if not already set
      setCurrentUser(userIdFromStorage);
    }
  }, [navigate, setCurrentUser]);

  const element = useRoutes([
    {
      path: "/",
      element: currentUser ? <Dashboard /> : <Login />,
    },
    {
      path: "/auth",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/profile",
      element: currentUser ? <Profile /> : <Login />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
