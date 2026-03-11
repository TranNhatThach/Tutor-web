import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  useEffect(() => {
    // Swiper sẽ được khởi tạo tự động bởi component Swiper
  }, []);

  return (
    <div>
      <section id="home" className="hero-section">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="mySwiper"
        >
          <SwiperSlide className="slide1">
            <div className="overlay">
              <h1>Tìm Gia Sư Giỏi Ngay Tại Nhà</h1>
              <p>Kết nối học viên và giáo viên hàng đầu Việt Nam.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide2">
            <div className="overlay">
              <h1>Học Trực Tuyến 1 kèm 1</h1>
              <p>Tương tác trực tiếp, hiệu quả gấp đôi.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide3">
            <div className="overlay">
              <h1>Ôn Thi Đại Học Cấp Tốc</h1>
              <p>Lộ trình cá nhân hóa cho mục tiêu điểm 9, 10.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide4">
            <div className="overlay">
              <h1>Gia Sư Ngoại Ngữ Bản Ngữ</h1>
              <p>Giao tiếp tự tin như người bản xứ.</p>
            </div>
          </SwiperSlide>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>

        <div className="search-container">
          <div className="search-box">
            <input type="text" placeholder="Bạn muốn tìm gia sư môn gì?" />
            <button>Tìm kiếm</button>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Liên Hệ Với Chúng Tôi</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Trung tâm hỗ trợ TutorConnect</h3>
              <p>📍 <strong>Địa chỉ:</strong> 123 Đường Cầu Giấy, Hà Nội</p>
              <p>📞 <strong>Hotline:</strong> 1900 1234 (8:00 - 22:00)</p>
              <p>✉️ <strong>Email:</strong> support@tutorconnect.vn</p>
              <p>🌐 <strong>Website:</strong> www.tutorconnect.vn</p>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Họ và tên của bạn" required />
              <input type="email" placeholder="Địa chỉ Email" required />
              <textarea placeholder="Nội dung bạn cần tư vấn..." required></textarea>
              <button type="submit" className="btn-filled">Gửi yêu cầu hỗ trợ</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}