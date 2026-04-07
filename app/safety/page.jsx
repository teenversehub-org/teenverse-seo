import { cookies } from 'next/headers';
import SafetyPageClient from '../components/SafetyPageClient';

// 🔥 High-Trust SEO Metadata
export const metadata = {
  title: "Trust & Safety | TeenVerseHub",
  description: "Your safety is our priority. Discover how TeenVerseHub provides a secure, monitored, and trustworthy environment for teenagers to freelance and build skills safely.",
  keywords: [
    "TeenVerseHub safety", 
    "safe freelance platform for teens", 
    "monitored freelance marketplace", 
    "guardian transparency platform",
    "teen digital safety"
  ],
  openGraph: {
    title: "Trust & Safety | TeenVerseHub",
    description: "Built from the ground up to protect teenagers in the digital economy.",
    type: "website",
  }
};

export default async function SafetyPage() {
  // Read the theme cookie for zero-delay, flash-free rendering
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('tvh-theme');
  const initialDarkMode = themeCookie ? themeCookie.value !== 'light' : true;

  return <SafetyPageClient initialDarkMode={initialDarkMode} />;
}