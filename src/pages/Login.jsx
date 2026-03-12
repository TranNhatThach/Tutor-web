import { useState } from "react"; // import useState hook để quản lý state trong component

export default function Login() {
  // tạo component Login và export để sử dụng ở nơi khác
  const [rememberPassword, setRememberPassword] = useState(false);
  // state lưu trạng thái checkbox "remember password"
  // mặc định là false (không ghi nhớ mật khẩu)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // state lưu email,mật khẩu người dùng nhập vào
  // mặc định là chuỗi rỗng
  const submit = async () => {
    // hàm submit dùng để gửi request đăng nhập lên backend
    // async để sử dụng await khi gọi API
    const res = await fetch("http://localhost:8080/api/auth/login", {
      // gửi request POST tới API login của backend Spring Boot
      method: "POST", // sử dụng phương thức POST để gửi dữ liệu đăng nhập
      headers: { "Content-Type": "application/json" }, // khai báo dữ liệu gửi đi là JSON
      body: JSON.stringify({ email, password }), // chuyển object javascript thành JSON
      // gửi email và password lên backend
    });
    const data = await res.json(); // await nhận dữ liệu trả về, response từ backend thành JSON để sử dụng
    if (res.ok) console.log("OK:", data);
    else console.error("ERR:", data);
  };

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
