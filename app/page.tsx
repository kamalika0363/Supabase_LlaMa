import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import ConnectSupabaseSteps from '@/components/ConnectSupabaseSteps'
import SummaryBox from '@/components/SummarizerBox'
import Header from '@/components/Header'
import { cookies } from 'next/headers'
import LinkBox from '@/components/LinkBox'

export default async function Index() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {

    try {
      createClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div className="flex flex-col items-center bg-black justify-center flex-1 w-full sm:gap-20">
      <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
        <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm">
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className="justify-center items-center w-full">
        <Header />
        <main className="flex flex-col sm:flex-row justify-center gap-4 p-4">
          {isSupabaseConnected ? <SummaryBox /> : <ConnectSupabaseSteps />}
          <LinkBox />
        </main>
      </div>

      <footer className="flex justify-center w-full p-8 text-xs text-center border-t border-t-foreground/10">
        <p>
          Created{' '}
          <a
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
