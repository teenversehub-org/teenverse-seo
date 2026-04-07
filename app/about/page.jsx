import { cookies } from 'next/headers';
import AboutPageClient from '../components/AboutPageClient';

// 🔥 Massive SEO Boost for the Founder
export const metadata = {
  title: "About Kashif Khan & TeenVerseHub | Built by a 15-Year-Old Founder",
  description: "Learn how 15-year-old founder Kashif Khan completely built TeenVerseHub from scratch to empower teenagers. Meet the team, including co-founders Subodh and Aditya.",
  keywords: [
    "Kashif Khan", 
    "Kashif Khan TeenVerseHub", 
    "Founder of TeenVerseHub", 
    "15 year old founder India", 
    "TeenVerseHub CEO", 
    "teen freelance platform"
  ],
  openGraph: {
    title: "The Story of TeenVerseHub & Founder Kashif Khan",
    description: "Built completely from the ground up by a 15-year-old visionary.",
    type: "website",
  }
};

export default async function About() {
  // Read the theme cookie for zero-delay, flash-free rendering
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('tvh-theme');
  const initialDarkMode = themeCookie ? themeCookie.value !== 'light' : true;

  return <AboutPageClient initialDarkMode={initialDarkMode} />;
}