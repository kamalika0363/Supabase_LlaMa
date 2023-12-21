import DeployButton from '../components/DeployButton'
import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import ConnectSupabaseSteps from '@/components/ConnectSupabaseSteps'
import SignUpUserSteps from '@/components/SummarizerBox'
import Header from '@/components/Header'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LinkBox from '@/components/LinkBox'

export default async function Index() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full sm:gap-20">
      <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
        <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm">
          {/* <DeployButton /> */}
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className="justify-center items-center ">
        <Header />
        <main className="flex flex-col sm:flex-row justify-center gap-8 p-4">
          {/* <h2 className="mb-4 text-4xl font-bold">Next steps</h2> */}
          {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
          <LinkBox />
        </main>
      </div>

      <footer className="flex justify-center w-full p-8 text-xs text-center border-t border-t-foreground/10">
        <p>
          Created{' '}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            @2023
          </a>
        </p>
      </footer>
    </div>
  )
}
