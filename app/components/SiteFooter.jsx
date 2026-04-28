import { footerGroups, SITE } from '../lib/site'

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-lg font-semibold text-slate-950">{SITE.name}</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Built in India for teen talent and startup teams who want a clearer,
              safer path into real digital work.
            </p>
            <dl className="mt-6 space-y-3 text-sm text-slate-600">
              <div>
                <dt className="font-semibold text-slate-950">Support</dt>
                <dd>{SITE.supportEmail}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-950">Location</dt>
                <dd>{SITE.location}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-950">Operator</dt>
                <dd>{SITE.operator}</dd>
              </div>
            </dl>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {group.title}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a className="transition hover:text-slate-950" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} TeenVerse Hub. All rights reserved.</p>
          <p>Founder: {SITE.founder}. Guardian-aware, trust-first marketplace positioning.</p>
        </div>
      </div>
    </footer>
  )
}
