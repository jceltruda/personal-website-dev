const experiences = [
  {
    id: 1,
    company: "Jahnel Group",
    location: "Schenectady, NY",
    date: "June 2026 - Present",
    role: "Software Engineer Intern",
    description: "Full stack engineering",
    logo: "/logos/jahnel.jpg"
  },
  {
    id: 2,
    company: "TE Connectivity",
    location: "Winston-Salem, NC",
    date: "May 2025 - Aug 2025",
    role: "Software Engineer Intern",
    description: "Full stack engineering inside automotive business unit",
    logo: "/logos/te-connectivity.jpg"
  },
  {
    id: 3,
    company: "P1ston",
    location: "Remote",
    date: "May 2025 - Aug 2025",
    role: "AI Engineer Intern (Part-Time)",
    description: "Prompt and AI engineering for supply chain document processing",
    logo: "/logos/p1ston.jpg"
  },
  {
    id: 4,
    company: "Hudson River Community Credit Union",
    location: "Corinth, NY",
    date: "May 2024 - Aug 2024",
    role: "Management Information Systems Intern",
    description: "Data pipeline automation and geospatial data processing",
    logo: "/logos/hrccu.jpg"
  }
];

export default function Experience() {
  return (
    <section className="animate-fade-in delay-200">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <img src={exp.logo} alt={`${exp.company} logo`} className="experience-logo" />
            <div className="experience-content">
              <div className="experience-header">
                <div className="experience-title-group">
                  <span className="experience-company">{exp.company}</span>
                  <span className="badge">{exp.location}</span>
                </div>
                <span className="experience-dates">{exp.date}</span>
              </div>
              <div className="experience-role">{exp.role}</div>
              <div className="experience-desc">{exp.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
