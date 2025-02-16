// src/components/Navbar/Navbar.tsx
import React, { useEffect } from "react";

import { LuLogOut } from "react-icons/lu";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { setActiveLink } from "../../redux/slices/activeLinkSlice";
import CartModal from "../CartModal/CartModal";

const Navbar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const activeLink = useSelector(
    (state: RootState) => state.activeLink.activeLink
  );

  useEffect(() => {
    if (location.pathname.startsWith("/product")) {
      dispatch(setActiveLink("/shop"));
    } else {
      dispatch(setActiveLink(location.pathname));
    }
  }, [location.pathname, dispatch]);

  return (
    <nav className="bg-white border-b border-gray-200 px-8">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-4">
        <NavLink to="/" className="flex items-center">
          <img
            src="./src/assets/images/greenshop-logo.png"
            alt="GreenShop"
            className="h-8 w-[150px] mr-2"
          />
        </NavLink>
        <ul className="flex items-center space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-800 relative ${
                  isActive || activeLink === "/"
                    ? "font-bold after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-green-600"
                    : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `text-gray-800 relative ${
                  isActive || activeLink === "/shop"
                    ? "font-bold after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-green-600"
                    : ""
                }`
              }
            >
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `text-gray-800 relative ${
                  isActive || activeLink === "/blogs"
                    ? "font-bold after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-green-600"
                    : ""
                }`
              }
            >
              Blogs
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <CartModal />
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
