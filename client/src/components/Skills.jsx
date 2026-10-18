export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title">
          <h2>Kỹ Năng & Công Nghệ</h2>
          <p>[Các công cụ, ngôn ngữ và công nghệ tôi thành thạo]</p>
        </div>

        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend Development</h3>
            <div className="skill-list">
              <div className="skill-card">[HTML5 / CSS3 / SCSS]</div>
              <div className="skill-card">[JavaScript / TypeScript]</div>
              <div className="skill-card">[React.js / Next.js]</div>
              <div className="skill-card">[Tailwind CSS / Redux]</div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend & Database</h3>
            <div className="skill-list">
              <div className="skill-card">[Node.js / Express]</div>
              <div className="skill-card">[RESTful API / GraphQL]</div>
              <div className="skill-card">[MongoDB / PostgreSQL]</div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Công Cụ & Khác</h3>
            <div className="skill-list">
              <div className="skill-card">[Git / GitHub]</div>
              <div className="skill-card">[Figma / UI UX]</div>
              <div className="skill-card">[Docker / CI-CD]</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}