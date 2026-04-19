'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <h1 className="font-syne text-2xl font-extrabold text-[#0A0F1E]">Something went wrong</h1>
      <p className="max-w-md text-sm text-[#6B7280]">
        {error.message || 'An unexpected error occurred while loading this page.'}
      </p>
      <button
        type="button"
        onClick={reset}
        className="btn-primary"
      >
        Try again
      </button>
    </div>
  )
}
