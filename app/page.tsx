import { cookies } from 'next/headers';
import LandingPageClient from './components/LandingPageClient';

export const metadata = {
  title: "TeenVerseHub – Hire Verified Teen Freelancers & Digital Creators",
  description: "India's secure digital services marketplace for teens. Build your portfolio, hire verified young talent, and process payments securely with guardian consent.",
  keywords: ["hire teen freelancers", "teen digital creators", "india student jobs", "safe freelance marketplace", "video editing teens"],
};

export default async function Home() {
  // 1. Server reads the cookie before the page even loads!
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('tvh-theme');
  
  // 2. Default to true (dark), unless the cookie explicitly says 'light'
  const initialDarkMode = themeCookie ? themeCookie.value !== 'light' : true;

  // 3. Pass the correct theme down to the client component
  return <LandingPageClient initialDarkMode={initialDarkMode} />;
}