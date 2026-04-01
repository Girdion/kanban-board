import React, { useState } from "react";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password)
      toast.error("Please fill all the required fields!");

    console.log(email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0f0f1a] px-6 py-10">
      <div className="border-2 border-[#ffeb3b] shadow-[8px_8px_0px_#ffeb3b] w-full md:max-w-lg bg-[#1a1a2e]">
        <div className="flex flex-col items-center py-10 px-6 md:py-16 md:px-14">
          <h1 className="text-3xl md:text-4xl mb-4 text-[#ffeb3b] tracking-widest text-center">
            [ KANBAN ARCADE ]
          </h1>
          <p className="mb-6 text-[#aaaaaa] text-base tracking-wider">
            LOGIN TO CONTINUE
          </p>

          <div className="w-full max-w-sm mx-auto flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[#ffeb3b] text-2xl tracking-wider">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="user@email.com"
                className="w-full bg-[#fdf6e3] text-[#111111] border-2 border-[#111111] px-3 py-2 text-lg shadow-[4px_4px_0px_#111111] focus:outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#ffeb3b] text-2xl tracking-wider">
                PASSWORD
              </label>
              <input
                type="password"
                placeholder="········"
                className="w-full bg-[#fdf6e3] text-[#111111] border-2 border-[#111111] px-3 py-2 text-lg shadow-[4px_4px_0px_#111111] focus:outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="mt-2 w-full border-2 border-[#ffeb3b] text-[#ffeb3b] py-2 text-lg shadow-[5px_5px_0px_#ffeb3b]
              hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-none 
              active:translate-x-1.25 active:translate-y-1.25 active:shadow-none transition-all duration-100"
              onClick={handleLogin}
            >
              [ LOGIN ]
            </button>

            <p className="text-center mt-6 text-base">
              <span className="text-[#aaaaaa]">no account? </span>
              <span className="text-[#ff6b6b] font-bold cursor-pointer hover:underline">
                register here
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
