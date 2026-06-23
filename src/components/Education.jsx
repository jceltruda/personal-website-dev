const education = [
  {
    id: 1,
    school: "Rensselaer Polytechnic Institute",
    date: "2026 - (Dec 2026)",
    degree: "M.S. Computer Science",
    gpa: "GPA: 4.0 / 4.0",
    logo: "/logos/rpi.jpg"
  },
  {
    id: 2,
    school: "Rensselaer Polytechnic Institute",
    date: "2022 - 2025",
    degree: "B.S. Computer Science",
    gpa: "GPA: 3.62 / 4.0",
    logo: "/logos/rpi.jpg"
  }
];

export default function Education() {
  return (
    <section className="animate-fade-in delay-300">
      <h2>Education</h2>
      <div className="experience-list">
        {education.map((edu) => (
          <div key={edu.id} className="experience-item">
            <img src={edu.logo} alt={`${edu.school} logo`} className="experience-logo" />
            <div className="experience-content">
              <div className="experience-header">
                <span className="experience-company">{edu.school}</span>
                <span className="experience-dates">{edu.date}</span>
              </div>
              <div className="experience-role">{edu.degree}</div>
              <div className="experience-desc text-muted" style={{fontFamily: 'monospace', fontSize: '0.85rem'}}>
                {edu.gpa}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
