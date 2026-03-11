import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          🎓 Tutor<span>Connect</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/">Khóa học</Link>
          </li>
          <li>
            <Link to="/">Giáo viên</Link>
          </li>
          <li>
            <Link to="/">Liên hệ</Link>
          </li>
          <li>
            <Link to="/login">
              <button className="btn-outline">Đăng nhập</button>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <button className="btn-filled">Đăng ký</button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Nội dung trang */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
