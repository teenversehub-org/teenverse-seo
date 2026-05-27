import { buildMetadata } from './lib/site'
import HomePageClient from './HomePageClient'

export const metadata = buildMetadata({
  title: 'TeenVerseHub | Teen Freelancing Platform for Students',
  description:
    'TeenVerseHub helps students and teenagers build portfolios, find beginner-friendly projects, learn digital skills, and work with startups in a safer online platform.',

  path: '/',

  keywords: [
    'TeenVerseHub',
    'TeenVerse Hub',
    'teen freelancing platform',
    'freelancing platform for students',
    'student freelancing website',
    'teen talent marketplace',
    'student talent marketplace',
    'online jobs for teenagers',
    'safe online jobs for teens',
    'online work for students',
    'hire teen freelancers',
    'hire student freelancers',
    'teen portfolio builder',
    'student portfolio builder',
    'digital skills for teens',
    'teen digital skills',
    'beginner freelance projects',
    'freelance jobs for teens',
    'freelance jobs for students',
    'AI tools for teen freelancers',
    'startup projects for students',
    'student work platform India',
    'teen freelancing India',
  ],
})

export default function HomePage() {
  return <HomePageClient />
}