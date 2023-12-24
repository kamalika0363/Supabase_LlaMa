## Stack Used
- Next.js
- Supabase
- Hugging Face
- Tailwind CSS
- Shadcn

## Features

- Works across the entire [Next.js](https://nextjs.org) stack
    - Can store links fast in DB
    - Summarize text
    - Make groups for different topics
    - Check your tasks in dashboard


## Clone and run locally

1. You'll first need a Supabase project which can be made [via the Supabase dashboard](https://database.new)

2. Clone this repo and install dependencies

   ```bash
   git clone https://github.com/kamalika0363/task_ai.git
   ```
      ```bash
   npm install
   ```

3. Use `cd` to change into the app's directory

   ```bash
   cd task_ai
   ```

4. Rename `.env.local.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   HF_KEY=[INSERT HUGGING FACE API KEY
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)

5. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

   The app should now be running on [localhost:3000](http://localhost:3000/).
