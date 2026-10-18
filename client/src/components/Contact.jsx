import { useState } from 'react';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message) return alert('Vui lòng nhập lời nhắn!');
    
    setStatus('Đang gửi...');
    try {
      const res = await fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      const data = await res.json();
      if (data.success) {
        setStatus('Đã gửi thành công về điện thoại!');
        setMessage('');
      } else {
        setStatus('Lỗi: ' + (data.error || 'Gửi thất bại'));
      }
    } catch (e) {
      setStatus('Lỗi kết nối server');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Gửi Thông Điệp</h2>
        </div>

        <div className="contact-form-only">
          <form onSubmit={handleSend}>
            <div className="form-group">
              <textarea
                rows="5"
                placeholder="Nhập lời nhắn bất kỳ tại đây..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              Gửi ngay
            </button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>
      </div>
    </section>
  );
}