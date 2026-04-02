import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Board from "./pages/Board.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/board"
          element={
            <ProtectedRoute>
              <Board />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
        toastStyle={{
          background: "#1a1a2e",
          color: "#ffeb3b",
          border: "2px solid #ffeb3b",
          maxWidth: "420px",
          margin: "0 auto 8px auto",
          borderRadius: "6px",
        }}
        style={{
          marginTop: "calc(env(safe-area-inset-top) + 16px)",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
        limit={3}
      />
    </>
  );
}

export default App;
