import { useState } from "react";

export default function Login() {
  const [rememberPassword, setRememberPassword] = useState(false);

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={titleStyle}>Đăng Nhập</h2>

        <input type="email" placeholder="Email" style={inputStyle} />

        <input type="password" placeholder="Mật khẩu" style={inputStyle} />

        <div style={checkboxContainerStyle}>
          <input
            type="checkbox"
            id="rememberPassword"
            checked={rememberPassword}
            onChange={(e) => setRememberPassword(e.target.checked)}
            style={checkboxStyle}
          />
          <label htmlFor="rememberPassword" style={labelStyle}>
            Nhớ mật khẩu
          </label>
          <a href="/forgot-password" style={forgotPasswordStyle}>
            Quên mật khẩu?
          </a>
        </div>

        <button style={buttonStyle}>Đăng nhập</button>

        <p style={linkStyle}>
          Chưa có tài khoản?{" "}
          <a href="/register" style={anchorStyle}>
            Đăng ký ngay
          </a>
        </p>
      </div>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#f5f5f5",
};

const formContainerStyle = {
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "15px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  width: "100%",
  height: "440px",
  maxWidth: "400px",
};

const titleStyle = {
  textAlign: "center",
  color: "#333",
  marginBottom: "30px",
  fontSize: "24px",
  fontWeight: "600",
};

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "12px",
  margin: "15px 0",
  border: "1px solid #ddd",
  borderRadius: "4px",
  fontSize: "14px",
  boxSizing: "border-box",
  transition: "border-color 0.3s",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "25px",
  backgroundColor: "#1976d2",
  color: "white",
  border: "none",
  borderRadius: "4px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

const linkStyle = {
  textAlign: "center",
  marginTop: "20px",
  fontSize: "14px",
  color: "#666",
};

const anchorStyle = {
  color: "#1976d2",
  textDecoration: "none",
  fontWeight: "600",
  cursor: "pointer",
};

const checkboxContainerStyle = {
  display: "flex",
  alignItems: "center",
  margin: "15px 0",
  gap: "8px",
};

const checkboxStyle = {
  width: "18px",
  height: "18px",
  cursor: "pointer",
};

const labelStyle = {
  fontSize: "14px",
  color: "#333",
  cursor: "pointer",
  userSelect: "none",
};

const forgotPasswordStyle = {
  marginLeft: "auto",
  fontSize: "13px",
  color: "#1976d2",
  textDecoration: "none",
  cursor: "pointer",
  fontWeight: "500",
};
