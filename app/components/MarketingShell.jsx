import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

export default function MarketingShell({ children }) {
  return (
    <div className="site-shell min-h-screen overflow-x-clip text-slate-950 dark:text-white selection:bg-indigo-200 selection:text-slate-950 dark:selection:bg-emerald-300 dark:selection:text-slate-950">
      <SiteHeader />
      <main className="relative z-10">{children}</main>
      <SiteFooter />
    </div>
  )
}
