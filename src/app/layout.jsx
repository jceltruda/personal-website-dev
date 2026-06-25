import '../index.css';
import '../App.css';
import NavBar from '../components/NavBar';

export const metadata = {
  title: 'Joseph Celtruda',
  description: 'Personal Website of Joseph Celtruda',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
