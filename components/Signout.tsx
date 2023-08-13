
import { type NextRequest, NextResponse } from 'next/server'
import supabase from '../config/supabaseClient';

export async function POST(req: NextRequest) {

  await supabase.auth.signOut()

  return NextResponse.redirect(new URL('/', req.url), {
    status: 302,
  });
}
