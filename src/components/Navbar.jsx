import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/auth/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  console.log(user);

  return (
    <div className="flex justify-between p-4 bg-[#0f0f1a] border-b-[#ffeb3b] border-b-8">
      <div className="flex gap-8 text-4xl text-[#ffeb3b] items-center">
        <p>▶</p>
        <p>KANBAN ARCADE</p>
      </div>
      <div className="flex gap-8 text-[#ffeb3b] items-center">
        <p className="text-[#ffeb3b] text-4xl">
          {user.email ? user.email : "Jonathan Djoko"}
        </p>
        <button
          onClick={handleLogout}
          className="text-[#ff6b6b] text-2xl border border-[#ff6b6b] rounded-lg p-2 cursor-pointer transition-all duration-150 hover:bg-[#ff6b6b22] active:scale-95"
        >
          [ LOGOUT ]
        </button>
      </div>
    </div>
  );
}

export default Navbar;
