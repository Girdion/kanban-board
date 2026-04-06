import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";

const Board = () => {
  const dispatch = useDispatch();
  const { columns, tasks } = useSelector((state) => state.board);

  return (
    <div className="min-h-screen bg-[#0f0f1a]">
      <Navbar />
    </div>
  );
};

export default Board;
