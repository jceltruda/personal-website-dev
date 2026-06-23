const projects = [
  {
    id: 1,
    title: "Rehab Games",
    description: "Turns rehab exercises into fun retro games",
    tags: ["JavaScript", "Django", "MediaPipe", "Gunicorn"]
  },
  {
    id: 2,
    title: "Lung Cancer Detection Using CNN",
    description: "CNN for lung cancer detection from CT scans",
    tags: ["Python", "PyTorch"]
  },
  {
    id: 3,
    title: "FinGPT - Transformer Prediction",
    description: "Fine-tuning LLMs for stock market prediction",
    tags: ["Python", "PyTorch", "Transformers"]
  }
];

export default function Projects() {
  return (
    <section className="animate-fade-in delay-400">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <span className="project-title">{project.title}</span>
              <span className="project-status"></span>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="badge">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
