import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp!");
      return;
    }
    try {
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        console.log("OK:", data);
        navigate("/login");
      } else {
        alert(data.message);
        console.error("ERR:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={styles.containerStyle}>
      <div style={styles.formContainerStyle}>
        <h2 style={styles.titleStyle}>Đăng Ký</h2>

        <input
          placeholder="Họ tên"
          style={styles.inputStyle}
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          style={styles.inputStyle}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          style={styles.inputStyle}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Xác nhận mật khẩu"
          style={styles.inputStyle}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <select
          style={styles.selectStyle}
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="" disabled>
            Chọn vai trò
          </option>
          <option value="GIA_SU">Gia sư</option>
          <option value="HOC_VIEN">Học viên</option>
        </select>

        <input
          type="text"
          placeholder="Số điện thoại"
          style={styles.inputStyle}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Địa chỉ"
          style={styles.inputStyle}
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <button style={styles.buttonStyle} onClick={handleSubmit}>
          Tạo tài khoản
        </button>

        <p style={styles.linkStyle}>
          Đã có tài khoản?{" "}
          <a href="/login" style={styles.anchorStyle}>
            Đăng nhập
          </a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  containerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "115vh",
    backgroundColor: "#f5f5f5",
  },

  formContainerStyle: {
    backgroundColor: "white",
    padding: "35px",
    borderRadius: "15px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
  },

  titleStyle: {
    textAlign: "center",
    color: "#333",
    marginBottom: "25px",
    fontSize: "24px",
    fontWeight: "600",
  },

  inputStyle: {
    display: "block",
    width: "100%",
    padding: "10px 12px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    boxSizing: "border-box",
  },

  selectStyle: {
    display: "block",
    width: "100%",
    padding: "10px 12px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    boxSizing: "border-box",
    backgroundColor: "white",
  },

  buttonStyle: {
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
  },

  linkStyle: {
    textAlign: "center",
    marginTop: "15px",
    fontSize: "14px",
    color: "#666",
  },

  anchorStyle: {
    color: "#1976d2",
    textDecoration: "none",
    fontWeight: "600",
    cursor: "pointer",
  },
};
