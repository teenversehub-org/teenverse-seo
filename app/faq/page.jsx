import { cookies } from 'next/headers';
import FaqPageClient from '../components/FaqPageClient';

// 🔥 SEO Metadata tailored for the FAQ page
export const metadata = {
  title: "Frequently Asked Questions | TeenVerseHub",
  description: "Got questions about TeenVerseHub? Learn about our safety measures, how payments work, age requirements, and how to get started on our platform.",
  keywords: [
    "TeenVerseHub FAQ", 
    "is TeenVerseHub safe", 
    "how to earn on TeenVerseHub", 
    "freelance platform for teens", 
    "guardian consent teen platform"
  ],
  openGraph: {
    title: "Frequently Asked Questions | TeenVerseHub",
    description: "Everything you need to know about navigating and succeeding on TeenVerseHub.",
    type: "website",
  }
};

export default async function FaqPage() {
  // Read the theme cookie for zero-delay, flash-free rendering
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('tvh-theme');
  const initialDarkMode = themeCookie ? themeCookie.value !== 'light' : true;

  return <FaqPageClient initialDarkMode={initialDarkMode} />;
}