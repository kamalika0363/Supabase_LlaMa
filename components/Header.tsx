
export default function Header() {
  return (
    <div className="flex flex-col items-center sm:gap-16 px-20 mt-8 sm:mt-0 sm:px-0 bg-black text-gray-300">
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
