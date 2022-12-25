import React from "react";
import "./toast.css";

function Toast({ message, bg }) {
  return (
    <div style={{background: bg}} className="toast">
      <div className="toast__message">{message}</div>
    </div>
  );
}

export default Toast;
