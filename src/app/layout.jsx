import '../index.css';
import '../App.css';
import NavBar from '../components/NavBar';

export const metadata = {
  metadataBase: new URL('https://joeceltruda.dev'),
  title: 'Joseph Celtruda',
  description: 'Personal Website of Joseph Celtruda',
  openGraph: {
    title: 'Joseph Celtruda',
    description: 'M.S. Computer Science @ RPI — Software Engineering & Applied AI',
    url: 'https://joeceltruda.dev',
    siteName: 'Joseph Celtruda',
    type: 'website',
  },
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
