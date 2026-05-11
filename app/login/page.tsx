
import Link from "next/link"

export default function LoginPage() {
    return (
        <main className="flex min-h-screen items-center justify-center px-6">

          <section className="flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-md rounded-3xl border border-zinc-300 bg-white p-8 md:p-10 shadow-sm">
  
          <div className="mb-8">
  
            <h1 className="text-4xl font-bold tracking-tight text-black">
              Welcome back
            </h1>
  
            <p className="mt-3 text-zinc-700">
              Login to continue exploring global opportunities.
            </p>
  
          </div>
  
          <form className="space-y-5">
  
            <div>
  
              <label className="mb-2 block text-sm font-medium text-black">
                Email
              </label>
  
              <input
                type="email"
                placeholder ="you@example.com"
                className="w-full rounded-2xl border border-zinc-300 px-4 py-4 outline-none placeholder:text-zinc-400 focus:border-black"
              />
  
            </div>
  
            <div>
  
              <label className="mb-2 block text-sm font-medium text-black">
                Password
              </label>
  
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-2xl border border-zinc-300 px-4 py-4 outline-none placeholder:text-zinc-400 focus:border-black"
              />
  
            </div>
  
            <Link
  href="/explore"
  className="block w-full rounded-2xl bg-black py-4 text-center text-white"
>
  Login
</Link>
  
          </form>
  
          <p className="mt-6 text-center text-sm text-zinc-800">
  
            Don’t have an account?{" "}
  
            <a
              href="/signup"
              className="font-medium text-black"
            >
              Sign up
            </a>
  
          </p>
  
        </div>
        </section>
  
      </main>
    )
  }