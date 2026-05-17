export default function StructuredData({ data }) {
  const payload = Array.isArray(data) ? data : [data]
  const json = JSON.stringify(payload).replace(/</g, '\\u003c')

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
