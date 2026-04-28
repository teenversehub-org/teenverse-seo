import { ImageResponse } from 'next/og'

export const alt = 'TeenVerse Hub'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          padding: '56px',
          background:
            'radial-gradient(circle at top left, rgba(16,185,129,0.26), transparent 28%), radial-gradient(circle at bottom right, rgba(14,165,233,0.20), transparent 26%), linear-gradient(180deg, #0f172a 0%, #111827 100%)',
          color: 'white',
          flexDirection: 'column',
          justifyContent: 'space-between',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
          }}
        >
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 24,
              background: '#10b981',
              color: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            TV
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 42, fontWeight: 700 }}>TeenVerse Hub</div>
            <div style={{ fontSize: 24, color: '#cbd5e1' }}>
              Safer teen freelancing and startup hiring
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: '900px',
            }}
          >
            Real work experience for teen talent. Clearer trust for modern startups.
          </div>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            {[
              'Verified profiles',
              'Protected payments',
              'Guardian-aware onboarding',
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: '14px 22px',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.10)',
                  fontSize: 24,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  )
}
