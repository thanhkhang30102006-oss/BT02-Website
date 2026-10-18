export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>&copy; {new Date().getFullYear()} Phan Thanh Khang.</p>
        <div className="back-to-top">
          <a href="#home">Quay lại đầu trang ↑</a>
        </div>
      </div>
    </footer>
  );
}