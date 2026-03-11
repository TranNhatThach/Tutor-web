export default function Register() {
  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={titleStyle}>Đăng Ký</h2>

        <input placeholder="Họ tên" style={inputStyle} />
        <input placeholder="Email" style={inputStyle} />
        <input type="password" placeholder="Mật khẩu" style={inputStyle} />
        <input
          type="password"
          placeholder="Xác nhận mật khẩu"
          style={inputStyle}
        />

        <select style={selectStyle} defaultValue="">
          <option value="">Chọn vai trò</option>
          <option value="tutor">Gia sư</option>
          <option value="student">Học viên</option>
        </select>

        <input type="text" placeholder="Số điện thoại" style={inputStyle} />
        <input type="text" placeholder="Địa chỉ" style={inputStyle} />

        <button style={buttonStyle}>Tạo tài khoản</button>

        <p style={linkStyle}>
          Đã có tài khoản?{" "}
          <a href="/login" style={anchorStyle}>
            Đăng nhập
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
  minHeight: "115vh",
  backgroundColor: "#f5f5f5",
};

const formContainerStyle = {
  backgroundColor: "white",
  padding: "35px",
  borderRadius: "15px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "400px",
};

const titleStyle = {
  textAlign: "center",
  color: "#333",
  marginBottom: "25px",
  fontSize: "24px",
  fontWeight: "600",
};

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px 12px",
  margin: "10px 0",
  border: "1px solid #ddd",
  borderRadius: "4px",
  fontSize: "14px",
  boxSizing: "border-box",
};

const selectStyle = {
  display: "block",
  width: "100%",
  padding: "10px 12px",
  margin: "10px 0",
  border: "1px solid #ddd",
  borderRadius: "4px",
  fontSize: "14px",
  boxSizing: "border-box",
  backgroundColor: "white",
};

const buttonStyle = {
  width: "100%",
  padding: "11px",
  marginTop: "15px",
  backgroundColor: "#1976d2",
  color: "white",
  border: "none",
  borderRadius: "4px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
};

const linkStyle = {
  textAlign: "center",
  marginTop: "15px",
  fontSize: "14px",
  color: "#666",
};

const anchorStyle = {
  color: "#1976d2",
  textDecoration: "none",
  fontWeight: "600",
  cursor: "pointer",
};
