import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navbar */}
        <nav style={styles.nav}>
          <h2>🎓 Tutor Web</h2>
          <div>
            <Link to="/" style={styles.link}>
              Trang chủ
            </Link>
            <Link to="/login" style={styles.link}>
              Đăng nhập
            </Link>
            <Link to="/register" style={styles.link}>
              Đăng ký
            </Link>
          </div>
        </nav>

        {/* Nội dung */}
        <div style={styles.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#1976d2",
    color: "white",
    width: "100%",
  },
  link: {
    color: "white",
    marginLeft: "20px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  container: {
    padding: "40px",
  },
};

export default App;
