
export default function Header() {
  return (
    <div className="flex flex-col items-center gap-16 px-32 sm:px-0">
      <div className="flex items-center justify-center gap-8">
        {/* <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer"
        >
          <SupabaseLogo />
        </a>
        <span className="h-6 rotate-45 border-l" />
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <NextLogo />
        </a> */}
      </div>
      {/* <h1 className="sr-only">Supabase and Next.js Starter Template</h1> */}
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        The fastest way to Store{' '}
        <a
          href="/"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Misc Data
        </a>{' '}
        and{' '}
        <a
          href="/"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Summarize
        </a>
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  )
}
