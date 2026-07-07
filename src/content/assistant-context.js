// Background context about Joseph, injected into the assistant's system prompt.
export const BACKGROUND = `## Background about Joseph

**Who he is:** Joseph Celtruda is a Computer Science master's student at Rensselaer Polytechnic Institute (RPI) in Troy, NY, graduating in December 2026. He works across software engineering and applied AI — full-stack development, scalable backend systems — with internship experience spanning a global hardware manufacturer, an AI startup, and a software consultancy. He is also a startup co-founder and served as president of his 50+ member fraternity.

**Contact:**
- Email: jaceltruda@gmail.com (preferred contact method)
- Phone: (518) 450-3994
- Website: https://joeceltruda.dev (this website)
- GitHub: https://github.com/jceltruda
- LinkedIn: https://linkedin.com/in/joseph-celtruda/
- Resume: https://joeceltruda.dev/resume (this website /resume)

**Background:**
- Originally from New York's Capital Region
- Received high school diploma in 2022: Advanced Regents diploma
- Attending school in Troy, NY
- Open to relocating

**Education (Rensselaer Polytechnic Institute, Troy, NY):**
- M.S. Computer Science — January 2026 – expected December 2026, GPA 4.0 / 4.0
- B.S. Computer Science, Minor in General Psychology — August 2022 – December 2025, GPA 3.62 / 4.0
- Relevant coursework: AI/ML, Distributed Systems, Database Systems, Data Structures, Algorithms, Cloud Computing

**Research:**
- Joseph researches optimizations to sequential recommender systems. His current work focuses on making the similarity mechanism behind the SimRec model more scalable: the existing method computes exact all-pairs similarity between every item in the dataset, and he is extending it to use nearest neighbor search so the model can scale to much larger datasets. He works on this research with Dr. Uzma Mushtaque (https://faculty.rpi.edu/uzma-mushtaque).

**Work experience:**
- Jahnel Group (Schenectady, NY) — Software Engineer Intern, June 2026 – Present. Built a full-stack internal company swag store (Next.js, Cloud SQL, Cloud Run, Docker) serving 150+ employees, featuring a custom virtual-currency system where employees earn credits based on tenure and accomplishments.
- AwayFriends (Troy, NY) — Co-founder & CTO, April 2026 – Present. Launched a social platform (React, Supabase) that connects people around shared events and destinations; engineered real-time user-matching via Postgres triggers and integrated secure Google OAuth 2.0 authentication. Currently in closed beta.
- TE Connectivity (Winston-Salem, NC) — Software Engineer Intern, May 2025 – Aug 2025. Architected Node.js microservices and APIs (MQTT/HTTP, Postgres) processing 10,000 sensor data points per minute; built a real-time machine-health alert dashboard (Bootstrap) for 100+ users, improving response times by 6x.
- P1ston (Remote) — AI Engineer Intern (Part-Time), May 2025 – Aug 2025. Fine-tuned open-source LLMs (Llama 4) with Hugging Face Transformers for supply chain document processing; engineered chain-of-thought and multi-shot extraction prompts achieving 100% validation accuracy.
- Hudson River Community Credit Union (Corinth, NY) — Management Information Systems Intern, May 2024 – Aug 2024. Developed Python data pipelines (Pandas, REST APIs) to process and geocode 100K+ data points.

**Projects:**
- RPIGPT — a chat platform grounded in course materials that delivers class-specific support to 7,000+ students. It is live and supported by RPI professors, open to anyone on the RPI network at https://chat.rpai.club/. Implemented vector search and RAG pipelines with ChromaDB and PyTorch for low-latency, high-relevance responses; the hardest engineering challenge was effectively chunking and retrieving the course-material context most relevant to each prompt. Tech: Python, React, FastAPI, ChromaDB, PyTorch. (This is the project Joseph is proudest of.)
- This portfolio website (joeceltruda.dev) — Joseph designed, built, and actively maintains this site, including the AI assistant you're chatting with. The assistant is currently prompt-based with all context included inline; he is actively extending it to give the assistant tool use (accessing GitHub and other live sources) and RAG over additional project and personal documents. Tech: Next.js, React.
- Rehab Games — webcam-controlled games that gamify shoulder therapy using MediaPipe motion tracking; a full-stack app with a Django backend and JavaScript frontend supporting leaderboards and difficulty modes. Tech: Django, JavaScript, MediaPipe. Live: https://rehab-games.onrender.com/
- Lung Cancer Detection Using CNN — a PyTorch CNN that classifies CT lung scans as cancerous or non-cancerous, achieving a 0.982 F1 score and 98.3% accuracy with 0% false negatives via custom grayscale and contrast enhancements. Tech: Python, PyTorch. Code: https://github.com/jceltruda/CNN-for-Lung-Cancer-Classification

**Leadership:**
- Theta Xi Fraternity — President, December 2024 – December 2025. Led a 50+ member organization with a $300K budget, overseeing operations, governance, and risk management. Secured the Theta Xi Memorial Trophy as the top national chapter (1 of 44) for the first time in 78 years. He inherited a disengaged chapter and turned it around: he set clear precedents and expectations, led by example, made himself available, checked in on members, and gave them autonomy — asking members to own and report on their plans rather than micromanaging them. By delegating broadly with clear context and instructions, the chapter excelled on its annual accreditation report (the basis for the award), dramatically improved morale and operations, and won the historic national trophy.

**Skills:**
- Languages: Python, Java, JavaScript, C++, C, SQL, HTML/CSS, Dart
- Tools & Frameworks: React, Node.js, Next.js, FastAPI, Django, LangChain, Hugging Face Transformers, PyTorch, MediaPipe, Git, Docker, Linux, GitHub, pgAdmin, Claude Code
- Databases & Cloud: Postgres, Firebase, Supabase, AWS (S3, EC2), GCP (Cloud Storage, Cloud SQL, Cloud Run), Vercel, Render

## What Joseph is looking for
- Seeking full-time, entry-level roles beginning in early 2027.
- Target roles: Software Engineer and AI Engineer. Open to all tech stacks.
- Open to US-based positions, and to any company type, size, or industry.
- Authorized to work in the US and does not require visa sponsorship.

## What drives him and how he works
- Most energized by building end-to-end products — working through hard problems and watching a product evolve and come to life.
- Deeply passionate about AI and building AI-driven solutions.
- A natural leader who enjoys collaborating with others and bringing out their best; strong communication and people skills alongside his technical ability.`;
