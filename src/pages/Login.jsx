import { useState } from "react"; // import useState hook để quản lý state trong component
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // import Link để tạo liên kết giữa các trang
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
  },
  formContainer: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    height: "440px",
    maxWidth: "400px",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "30px",
    fontSize: "24px",
    fontWeight: "600",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "12px",
    margin: "15px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    boxSizing: "border-box",
    transition: "border-color 0.3s",
  },
  button: {
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
    transition: "background-color 0.3s, transform 0.1s",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
    cursor: "not-allowed",
  },
  link: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "14px",
    color: "#666",
  },
  anchor: {
    color: "#1976d2",
    textDecoration: "none",
    fontWeight: "600",
    cursor: "pointer",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    margin: "15px 0",
    gap: "8px",
  },
  checkbox: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
  },
  label: {
    fontSize: "14px",
    color: "#333",
  },
  forgotPassword: {
    marginLeft: "auto",
    color: "#1976d2",
    textDecoration: "none",
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default function Login() {
  // tạo component Login và export để sử dụng ở nơi khác
  const [rememberPassword, setRememberPassword] = useState(false);
  // state lưu trạng thái checkbox "remember password"
  // mặc định là false (không ghi nhớ mật khẩu)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // state lưu email,mật khẩu người dùng nhập vào
  // mặc định là chuỗi rỗng
  const navigate = useNavigate(); // hook để điều hướng trang sau khi đăng nhập thành công
  const [isLoading, setIsLoading] = useState(false); // state cho loading khi submit
  const submit = async () => {
    // hàm submit dùng để gửi request đăng nhập lên backend
    // async để sử dụng await khi gọi API
    setIsLoading(true); // bắt đầu loading
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        // gửi request POST tới API login của backend Spring Boot
        method: "POST", // sử dụng phương thức POST để gửi dữ liệu đăng nhập
        headers: { "Content-Type": "application/json" }, // khai báo dữ liệu gửi đi là JSON
        body: JSON.stringify({ email, password }), // chuyển object javascript thành JSON
        // gửi email và password lên backend
      });
      const data = await res.json(); // await nhận dữ liệu trả về, response từ backend thành JSON để sử dụng
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("username", data.username);
        alert(data.message); // hiển thị thông báo đăng nhập thành công từ backend

        const role = data.role;

        if (role === "HOC_VIEN") {
          navigate("/student/StudentDashboard");
        }

        if (role === "GIA_SU") {
          navigate("/tutor/TutorDashboard");
        }
      } else {
        alert(data.message); // hiển thị thông báo lỗi từ backend
      }
    } catch (error) {
      console.error(error);
      alert("Lỗi server!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Đăng Nhập</h2>

        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div style={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="rememberPassword"
            checked={rememberPassword}
            onChange={(e) => setRememberPassword(e.target.checked)}
            style={styles.checkbox}
          />
          <label htmlFor="rememberPassword" style={styles.label}>
            Nhớ mật khẩu
          </label>
          <Link to="/forgot-password" style={styles.forgotPassword}>
            Quên mật khẩu?
          </Link>
        </div>

        <button
          style={isLoading ? styles.buttonDisabled : styles.button}
          onClick={submit}
          disabled={isLoading}
        >
          {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>

        <p style={styles.link}>
          Chưa có tài khoản?{" "}
          <Link to="/register" style={styles.anchor}>
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </div>
  );
}
