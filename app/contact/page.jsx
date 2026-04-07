import { cookies } from 'next/headers';
import ContactPageClient from '../components/ContactPageClient';

// 🔥 SEO Metadata for Contact Page
export const metadata = {
  title: "Contact Us | TeenVerseHub",
  description: "Get in touch with the TeenVerseHub team. Whether you have a question, need support, or want to partner with us, we're here to help.",
  keywords: [
    "Contact TeenVerseHub", 
    "TeenVerseHub support", 
    "TeenVerseHub email", 
    "teen freelance platform contact"
  ],
  openGraph: {
    title: "Contact TeenVerseHub",
    description: "We are here to help you navigate your digital journey safely.",
    type: "website",
  }
};

export default async function ContactPage() {
  // Read the theme cookie for zero-delay, flash-free rendering
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('tvh-theme');
  const initialDarkMode = themeCookie ? themeCookie.value !== 'light' : true;

  return <ContactPageClient initialDarkMode={initialDarkMode} />;
}