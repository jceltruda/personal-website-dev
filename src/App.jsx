import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <main className="app-container">
      <Header />
      <Experience />
      <Education />
      <Projects />
      <Skills />
    </main>
  );
}

export default App;
