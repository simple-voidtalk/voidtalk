import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
        <h1 className="text-5xl font-thin underline">Home Page of Voidtalk</h1>
        <Link href="/sign-in">Login</Link>
    </div>
  )
}
