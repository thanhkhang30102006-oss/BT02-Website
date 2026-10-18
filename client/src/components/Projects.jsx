export default function Projects() {
  const projectList = [
    {
      title: "Hệ thống Quản lý Giả lập môi trường Ngân hàng ",
      tech: "Java+ Servlet, MySQL",
      role: "Fullstack Developer",
      github: "https://github.com/khangdafin/BankManagement.git",
      description: [
        "Xây dựng giao diện thân thiện với người dùng, giả lập quản lý các thao tác trên ngân hàng.",
        "Thiết kế CSDL để xử lý dữ liệu về chuyển tiền, rút tiền, xung đột giao dịch như thế nào",
        "Tích hợp cổng thanh toán mô phỏng."
      ]
    },
    {
      title: "Website Quản Lý Các Chuyến Bay",
      tech: "Node.js, React.js, MySQL",
      role: "Developer",
      github: "https://github.com/thanhkhang30102006-oss/Web_Flight_Management.git",
      description: [
        "Thiết kế giao diện hiển thị thông tin chi tiết tuyến bay, lộ trình bay ra sao, đặt vé và thao tác chọn ghế đặt chỗ ngồi",
        "Tối ưu khả năng người dùng thao tác, tăng sự thuận tiện khi người dùng đặt các chuyến bay"
      ]
    },
    {
      title: "3D-ProjectManagement",
      tech: "Python, React.js, MongoDB",
      role: "Developer",
      github: "https://github.com/thanhkhang30102006-oss/3D-ProjectManagement.git",
      description: [
        "Xây dựng môi trường làm việc và quản lý thuận tiện trogn quản lý tài nguyên và vẽ đồ họa 3D"
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-title">
          <h2>Danh Sách Dự Án (プロジェクト経歴)</h2>
          <p>Các dự án mã nguồn mở đã thực hiện và liên kết GitHub</p>
        </div>

        <div className="projects-list-cv">
          {projectList.map((item, index) => (
            <div key={index} className="project-cv-item">
              <div className="project-cv-header">
                <div>
                  <h3 className="project-cv-title">{item.title}</h3>
                  <span className="project-cv-role">Vai trò: {item.role}</span>
                </div>
                <a href={item.github} target="_blank" rel="noreferrer" className="github-btn">
                  📂 Xem trên GitHub ↗
                </a>
              </div>
              <div className="project-cv-tech">
                <strong>Công nghệ sử dụng:</strong> {item.tech}
              </div>
              <ul className="project-cv-desc">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}