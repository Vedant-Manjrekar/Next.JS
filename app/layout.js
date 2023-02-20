import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <nav style={{ padding: '1rem' }}>
          <ul>
            <li style={{ display: 'flex', gap: '2rem' }}>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
