import { Link, useLocation } from "react-router-dom";
import "./Layout_home.css";

function Layout_home() {
  const location = useLocation();
  return (
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
  );
}

export default Layout_home;
