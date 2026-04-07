import { cookies } from 'next/headers';
import LegalPageClient from '../components/LegalPageClient';

// 🔥 SEO Metadata for Legal compliance and trust
export const metadata = {
  title: "Legal Center & Policies | TeenVerseHub",
  description: "Review TeenVerseHub's Terms of Service, Privacy Policy, Dispute Resolution, and Parent/Guardian Agreements.",
  keywords: [
    "TeenVerseHub terms of service", 
    "TeenVerseHub privacy policy", 
    "teen freelance platform rules",
    "guardian agreement teenversehub",
    "legal center"
  ],
};

export default async function LegalPage() {
  // Read the theme cookie for zero-delay, flash-free rendering
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('tvh-theme');
  const initialDarkMode = themeCookie ? themeCookie.value !== 'light' : true;

  return <LegalPageClient initialDarkMode={initialDarkMode} />;
}