import { Link } from "react-router-dom";

function StudentSidebar() {
  return (
    <div className="sidebar">
      <h2>Akadon</h2>

      <Link to="/student/dashboard">Trang chủ</Link>
      <Link to="/student/search">Tìm gia sư</Link>
      <Link to="/student/schedule">Lịch học</Link>
      <Link to="/student/wallet">Ví tiền</Link>
    </div>
  );
}

export default StudentSidebar;
