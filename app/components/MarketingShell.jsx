import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

export default function MarketingShell({ children }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.10),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.10),_transparent_26%),linear-gradient(180deg,_#f8fafc_0%,_#f3f6fb_100%)] text-slate-950">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}
