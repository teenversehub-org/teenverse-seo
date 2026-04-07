import { Inter, Space_Grotesk } from 'next/font/google';
import "./globals.css"; // (Keep whatever CSS imports you already have here)

// 1. Configure the fonts to output CSS variables
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // 2. Inject the variables into the HTML tag
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}