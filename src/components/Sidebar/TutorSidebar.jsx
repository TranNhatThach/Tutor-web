import { Link } from "react-router-dom";

function TutorSidebar() {
  return (
    <div className="sidebar">
      <h2>Akadon</h2>

      <Link to="/tutor/dashboard">Trang chủ</Link>
      <Link to="/tutor/students">Học viên</Link>
      <Link to="/tutor/courses">Lớp đang dạy</Link>
      <Link to="/tutor/earnings">Thu nhập</Link>
    </div>
  );
}

export default TutorSidebar;
