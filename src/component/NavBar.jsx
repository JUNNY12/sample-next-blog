import Link from "next/link"

export default function NavBar() {
  return(
    <nav className="flex items-center gap-[10%] mobileM:justify-center">
      <Link href="/" className="hover:underline text-3xl font-bold mobileM:text-2xl">My Next Blog</Link>

      <Link href="/bio" className="text-2xl mobileM:text-xl">Bio</Link>
    </nav>
  )

}