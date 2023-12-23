import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AuthButton() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const signOut = async () => {
    'use server'

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    return redirect('/login')
  }

  return user ? (
      <div className="flex flex-col sm:flex-row mt-12 text-gray-300 items-center sm:gap-4 gap-2 mb-5">
        <span className="">Hey, {user.email} !</span>
        <form action={signOut}>
          <button className="mx-1 sm:mx-2 border border-gray-400 px-4 py-2 no-underline rounded-md sm:text-md text-xs bg-btn-background hover:bg-btn-background-hover">
            Logout
          </button>
          <Link className="mx-1 sm:mx-2 border border-gray-400 px-4 py-2 no-underline rounded-md sm:text-md text-xs bg-btn-background hover:bg-btn-background-hover" href="/dashboard">
            Dashboard
          </Link>
          <Link className="mx-1 sm:mx-2 border border-gray-400 px-4 py-2 no-underline rounded-md sm:text-md text-xs bg-btn-background hover:bg-btn-background-hover" href="/createGroup">
            Create Group
          </Link>
        </form>
      </div>
  ) : (
      <Link
          href="/login"
          className="flex text-gray-200 text-md hover:bg-slate-900 border px-3 py-2 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover mt-4 sm:mt-0"
      >
        Login
      </Link>
  )
}
