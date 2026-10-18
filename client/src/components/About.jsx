export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>Hành Trình Phát Triển Của Tôi</h2>
          <p>Định hướng bản thân, nền tảng công nghệ và mục tiêu nghề nghiệp</p>
        </div>

        <div className="about-narrative-wrapper">
          {/* 1. Lời giới thiệu tổng quan */}
          <div className="narrative-card intro-box">
            <h3>Xin chào! Mình là Phan Thanh Khang</h3>
            <p>
              Hiện tại mình là sinh viên năm cuối chuyên ngành Công Nghệ Thông Tin. 
              Mình có niềm đam mê đặc biệt với lập trình, yêu thích việc thực hành thao tác với các dòng lệnh biến bản vẽ thành các sản phẩm, dễ sử dụng cho người dùng.
            </p>
            <p>
              Trong quá trình học tập tại trường, mình chủ động tham gia làm bài tập lớn và thực hiện các dự án cá nhân để rèn luyện tư duy lập trình thực tế.
            </p>
          </div>

          {/* 2. Lưới thông tin: Học vấn & Kỹ năng */}
          <div className="narrative-grid">
            {/* Học vấn & Nền tảng */}
            <div className="narrative-card">
              <h4>Học Vấn & Cột Mốc</h4>
              <ul className="narrative-list">
                <li>
                  <strong>Chuyên ngành:</strong> Công Nghệ Thông Tin (GPA: 3.6/4.0)
                </li>
                <li>
                  <strong>Ngoại ngữ:</strong> Hiện tại với tiếng anh có thể giao tiếp được, còn về tiếng Nhật đã đạt được N5.
                </li>
                <li>
                  <strong>Hoạt động:</strong> Thường xuyên tham gia các buổi Workshop công nghệ và làm việc nhóm trong các dự án đồ án môn học.
                </li>
              </ul>
            </div>

            {/* Kỹ năng công nghệ */}
            <div className="narrative-card">
              <h4>Kỹ Năng & Công Nghệ</h4>
              <p className="skills-subtext">Những công cụ mình đã và đang sử dụng trong các dự án:</p>
              
              <div className="tech-stack-groups">
                <div className="tech-group">
                  <span className="group-label">Frontend:</span>
                  <div className="tags">
                    <span className="tag">React.js</span>
                  </div>
                </div>

                <div className="tech-group">
                  <span className="group-label">Backend:</span>
                  <div className="tags">
                    <span className="tag">Node.js</span>
                    <span className="tag">Express.js</span>
                  </div>
                </div>

                <div className="tech-group">
                  <span className="group-label">Database & Tools:</span>
                  <div className="tags">
                    <span className="tag">MongoDB</span>
                    <span className="tag">MySQL</span>
                    <span className="tag">Git / GitHub</span>
                    <span className="tag">Postman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Phong cách làm việc & Mục tiêu (Tự PR tự nhiên) */}
          <div className="narrative-card pr-box">
            <h4>Định Hướng & Mục Tiêu Nghề Nghiệp</h4>
            <div className="pr-content">
              <p>
                <strong>Mục tiêu ngắn hạn:</strong> Tìm kiếm cơ hội thực tập hoặc vị trí Junior Web Developer tại một môi trường chuyên nghiệp để tích lũy kinh nghiệm thực tế, học hỏi từ các anh chị đi trước và đóng góp giá trị cho dự án của công ty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}