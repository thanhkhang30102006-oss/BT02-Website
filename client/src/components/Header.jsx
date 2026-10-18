import { useState, useEffect } from 'react';

export default function Header() {
  const [banner, setBanner] = useState('Đang tải lời nhắn admin...');

  useEffect(() => {
    fetch('/api/banner')
      .then(res => res.json())
      .then(data => setBanner(data.banner))
      .catch(() => setBanner('Chào mừng đến với Website cá nhân!'));
  }, []);

  return (
    <header className="header-wrapper">
      {/* Top Banner Chữ Chạy */}
      <div className="top-banner">
        <marquee>{banner}</marquee>
      </div>

      <div className="header">
        <div className="container header-container">
          <div className="logo">
            <a href="#home">Thanh Khang</a>
          </div>
          
          <nav className="nav-menu">
            <ul>
              <li><a href="#home">Trang chủ</a></li>
              <li><a href="#about">Lý lịch & Kỹ năng</a></li>
              <li><a href="#projects">Dự án GitHub</a></li>
              <li><a href="#contact">Gửi thông điệp</a></li>
            </ul>
          </nav>

          <div className="header-action">
            <a href="#contact" className="btn-cta">Gửi tin nhắn</a>
          </div>
        </div>
      </div>
    </header>
  );
}