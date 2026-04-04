import React, { useState } from "react";

function Navbar() {
  const [username, setUsername] = useState("");

  return (
    <div className="flex justify-between p-4 bg-[#0f0f1a] border-b-[#ffeb3b] border-b-8">
      <div className="flex gap-8 text-4xl text-[#ffeb3b] items-center">
        <p>▶</p>
        <p>KANBAN ARCADE</p>
      </div>
      <div className="flex gap-8 text-[#ffeb3b] items-center">
        <p className="text-[#ffeb3b] text-4xl">
          {username ? username : "Jonathan Djoko"}
        </p>
        <button className="text-[#ff6b6b] text-2xl border border-[#ff6b6b] rounded-lg p-2 cursor-pointer transition-all duration-150 hover:bg-[#ff6b6b22] active:scale-95">
          [ LOGOUT ]
        </button>
      </div>
    </div>
  );
}

export default Navbar;
