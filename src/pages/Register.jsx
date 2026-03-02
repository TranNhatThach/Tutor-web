export default function Register() {
  return (
    <div style={{ maxWidth: "400px" }}>
      <h2>Đăng ký</h2>

      <input placeholder="Họ tên" style={inputStyle} />
      <input placeholder="Email" style={inputStyle} />
      <input type="password" placeholder="Mật khẩu" style={inputStyle} />

      <button style={buttonStyle}>Tạo tài khoản</button>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  margin: "10px 0",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#1976d2",
  color: "white",
  border: "none",
};
