import { createClient } from '@supabase/supabase-js'

export default function handler(req, res) {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  res.status(200).json({ status: 'ok' })
}
