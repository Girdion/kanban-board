import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const navigate = useNavigate();
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleRegister = () => {
    if (!username || !email || !password || !confPassword) {
      toast.error("Please fill all the required fields!");
      return;
    }

    if (username.length < 3) {
      toast.error("Username must be at least 3 characters");
      return;
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      toast.error("Username can only contain letters, numbers, and underscore");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Invalid email format");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      toast.error("Password must include uppercase, lowercase, and number");
      return;
    }

    if (password !== confPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const user = {
      username,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    toast.success("Registration successful!");

    navigate("/login");
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-[#0f0f1a] px-6 py-10">
        <div className="border-2 border-[#ffeb3b] shadow-[8px_8px_0px_#ffeb3b] w-full md:max-w-lg bg-[#1a1a2e]">
          <div className="flex flex-col items-center py-10 px-6 md:py-16 md:px-14">
            <h1 className="text-3xl md:text-4xl mb-4 text-[#ffeb3b] tracking-widest text-center">
              [ KANBAN ARCADE ]
            </h1>
            <p className="mb-6 text-[#aaaaaa] text-base tracking-wider">
              CREATE YOUR ACCOUNT
            </p>
            <div className="w-full max-w-sm mx-auto flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[#ffeb3b] text-2xl tracking-wider">
                  USERNAME
                </label>
                <input
                  type="text"
                  placeholder="user123"
                  className="w-full bg-[#fdf6e3] text-[#111111] border-2 border-[#111111] px-3 py-2 text-lg shadow-[4px_4px_0px_#111111] focus:outline-none"
                  onChange={(e) => setUsername(e.target.value)}
                  maxLength={20}
                  ref={usernameRef}
                />
              </div>
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
              <div className="flex flex-col gap-2">
                <label className="text-[#ffeb3b] text-2xl tracking-wider">
                  CONFIRM PASSWORD
                </label>
                <input
                  type="password"
                  placeholder="········"
                  className="w-full bg-[#fdf6e3] text-[#111111] border-2 border-[#111111] px-3 py-2 text-lg shadow-[4px_4px_0px_#111111] focus:outline-none"
                  onChange={(e) => setConfPassword(e.target.value)}
                />
              </div>
              <button
                className="mt-2 w-full border-2 border-[#ffeb3b] text-[#ffeb3b] py-2 text-lg shadow-[5px_5px_0px_#ffeb3b]
              hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-none 
              active:translate-x-1.25 active:translate-y-1.25 active:shadow-none transition-all duration-100"
                onClick={handleRegister}
              >
                [ CREATE ACCOUNT ]
              </button>
              <p className="text-center mt-6 text-base">
                <span className="text-[#aaaaaa]">have an account? </span>
                <Link
                  to="/login"
                  className="text-[#ff6b6b] font-bold hover:underline"
                >
                  login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
