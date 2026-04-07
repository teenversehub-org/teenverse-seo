import { cookies } from 'next/headers';
import CreatorPageClient from '../components/CreatorPageClient';

// 🔥 Aggressive SEO Metadata targeting Teens & Students
export const metadata = {
  title: "Freelance Jobs for Teens & Students | TeenVerseHub",
  description: "Start your digital career today. TeenVerseHub is the safest freelance platform for teenagers to find online jobs, build a portfolio, and earn money.",
  keywords: [
    "freelance jobs for teens", 
    "online jobs for students", 
    "how to earn money as a teenager", 
    "student freelance platform India", 
    "safe online jobs for teens",
    "teen digital creator jobs"
  ],
  openGraph: {
    title: "Start Freelancing as a Teen | TeenVerseHub",
    description: "Build your portfolio, gain real experience, and earn money safely.",
    type: "website",
  }
};

export default async function CreatorPage() {
  // Read the theme cookie for zero-delay, flash-free rendering
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('tvh-theme');
  const initialDarkMode = themeCookie ? themeCookie.value !== 'light' : true;

  return <CreatorPageClient initialDarkMode={initialDarkMode} />;
}