'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 24 }}>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Something went wrong</h1>
        <p style={{ color: '#555', marginTop: 8 }}>{error.message}</p>
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: 16,
            padding: '10px 20px',
            borderRadius: 9999,
            border: 'none',
            background: '#4A9FFF',
            color: '#fff',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Try again
        </button>
      </body>
    </html>
  )
}
