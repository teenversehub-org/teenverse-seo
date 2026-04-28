import Image from 'next/image'
import Link from 'next/link'

function isExternal(href) {
  return href.startsWith('http') || href.startsWith('mailto:')
}

export function ActionLink({
  href,
  children,
  variant = 'primary',
  className = '',
}) {
  const classes = {
    primary:
      'inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400',
    secondary:
      'inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50',
    ghost:
      'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white/70',
  }

  if (isExternal(href)) {
    return (
      <a
        href={href}
        className={`${classes[variant]} ${className}`.trim()}
        target={href.startsWith('http') ? '_self' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={`${classes[variant]} ${className}`.trim()}>
      {children}
    </Link>
  )
}

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`px-4 py-16 sm:px-6 lg:px-8 ${className}`.trim()}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'
  const width = align === 'center' ? 'max-w-3xl' : 'max-w-2xl'

  return (
    <div className={`${alignment} ${width}`.trim()}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export function Hero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  proof = [],
  image,
  imageAlt,
  children,
}) {
  return (
    <Section className="pt-12 sm:pt-16 lg:pt-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
            {eyebrow}
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href={primaryAction.href}>{primaryAction.label}</ActionLink>
            {secondaryAction ? (
              <ActionLink href={secondaryAction.href} variant="secondary">
                {secondaryAction.label}
              </ActionLink>
            ) : null}
          </div>
          {proof.length ? (
            <ul className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
              {proof.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          {children}
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.10)]">
          {image ? (
            <Image
              src={image}
              alt={imageAlt}
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          ) : null}
        </div>
      </div>
    </Section>
  )
}

export function StatGrid({ items }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-sm font-medium text-slate-500">{item.label}</p>
          <p className="mt-3 text-2xl font-semibold text-slate-950">{item.value}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
        </div>
      ))}
    </div>
  )
}

export function FeatureGrid({ items, columns = 3 }) {
  const gridClass =
    columns === 2
      ? 'grid gap-4 md:grid-cols-2'
      : columns === 4
        ? 'grid gap-4 md:grid-cols-2 xl:grid-cols-4'
        : 'grid gap-4 md:grid-cols-2 xl:grid-cols-3'

  return (
    <div className={gridClass}>
      {items.map((item) => {
        const Icon = item.icon

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            {Icon ? (
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                <Icon className="h-6 w-6" />
              </div>
            ) : null}
            <h3 className="mt-5 text-xl font-semibold text-slate-950">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {item.description}
            </p>
            {item.link ? (
              <div className="mt-5">
                <ActionLink href={item.link.href} variant="ghost" className="px-0">
                  {item.link.label}
                </ActionLink>
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export function ComparisonList({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            {item.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export function CtaBand({
  title,
  description,
  primaryAction,
  secondaryAction,
}) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-10 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:px-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-300">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ActionLink href={primaryAction.href}>{primaryAction.label}</ActionLink>
          {secondaryAction ? (
            <ActionLink href={secondaryAction.href} variant="secondary">
              {secondaryAction.label}
            </ActionLink>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export function FaqList({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          open={index === 0}
        >
          <summary className="cursor-pointer list-none text-left text-lg font-semibold text-slate-950">
            {item.question}
          </summary>
          <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
