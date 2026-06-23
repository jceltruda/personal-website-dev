import '../index.css';
import '../App.css';

export const metadata = {
  title: 'Joseph Celtruda',
  description: 'Personal Website of Joseph Celtruda',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
