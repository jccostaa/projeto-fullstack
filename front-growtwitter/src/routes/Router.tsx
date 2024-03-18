import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Explore } from "../pages/Explore";
import { Profile } from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/explore',
    element: <Explore />
  },
  {
    path: '/profile',
    element: <Profile />
  }
])