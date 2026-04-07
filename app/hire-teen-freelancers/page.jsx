import { cookies } from 'next/headers';
import HirePageClient from '../components/HirePageClient';

// 🔥 Aggressive SEO Metadata targeting Clients & Founders
export const metadata = {
  title: "Hire Teen Freelancers & Student Talent | TeenVerseHub",
  description: "Outsource your startup and digital tasks to verified, highly-skilled teen freelancers. Get affordable video editing, web development, and social media management.",
  keywords: [
    "hire teen freelancers", 
    "hire student freelancers India", 
    "affordable video editors", 
    "hire Gen Z talent", 
    "outsource to students",
    "cheap freelance talent for startups"
  ],
  openGraph: {
    title: "Hire Skilled Teen Freelancers | TeenVerseHub",
    description: "Affordable, verified, and Gen-Z native talent ready to build your next project.",
    type: "website",
  }
};

export default async function HirePage() {
  // Read the theme cookie for zero-delay, flash-free rendering
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('tvh-theme');
  const initialDarkMode = themeCookie ? themeCookie.value !== 'light' : true;

  return <HirePageClient initialDarkMode={initialDarkMode} />;
}