import Image from 'next/image';
import Link from 'next/link';
import { Mail, Globe, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <section id="about" className="header-section">
      <div className="header-top">
        <div className="header-info">
          <h1 className="header-name">Joseph Celtruda</h1>
          <p className="header-subtitle">M.S. Computer Science @ RPI</p>
          <div className="header-location">
            <Globe size={14} />
            <span>Troy, NY, USA</span>
          </div>
          
          <div className="header-socials">
            <a href="mailto:jaceltruda@gmail.com" className="social-icon" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://github.com/jceltruda" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href="https://linkedin.com/in/joseph-celtruda/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
        
        <Image 
          src="/headshot-cropped.jpg" 
          alt="Joseph Celtruda" 
          className="header-image" 
          width={150}
          height={150}
          priority
        />
      </div>

      <div className="header-about">
        <h2>About</h2>
        <p>
          I am a Computer Science student at <a href="https://www.rpi.edu/" target="_blank" rel="noopener noreferrer" className="text-link">Rensselaer Polytechnic Institute</a>, researching
          sequential recommender systems and AI optimization. I am interested in software
          engineering and applied AI, with internship experience in AI engineering, full-stack
          development, and scalable backend systems.
        </p>
        <div className="header-actions">
          <a href="/resume" target="_blank" rel="noopener noreferrer" className="link-button">
            View my resume
          </a>
          <Link href="/chat" className="link-button link-button-accent">
            <Sparkles size={14} aria-hidden="true" />
            Ask my AI assistant
          </Link>
        </div>
      </div>
    </section>
  );
}
