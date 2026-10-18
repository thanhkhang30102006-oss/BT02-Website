import MyPicture from "../assets/MyPicture.jpg";
export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="badge">Xin chào!</span>
          <h1 className="hero-title">Phan Thanh Khang</h1>
          <h2 className="hero-subtitle">Backend App & Web Developer</h2>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Gửi thông điệp</a>
            <a href="#projects" className="btn btn-secondary">Xem dự án GitHub</a>
          </div>
        </div>

        <div className="hero-avatar">
          <img src={MyPicture} alt="Phan Thanh Khang" className="simple-avatar" />
        </div>
      </div>
    </section>
  );
}