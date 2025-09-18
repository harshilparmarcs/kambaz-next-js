// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 max-w-3xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6">Kambaz Application</h1>
      <p className="mb-4">Welcome to the Kambaz landing page. Navigate to your labs or account pages:</p>

      <nav className="mb-6">
        <ul className="list-disc list-inside space-y-2">
          <li><Link href="/kambaz/account/signin" className="text-blue-600 hover:underline">Signin Page</Link></li>
          <li><Link href="/kambaz/account/profile" className="text-blue-600 hover:underline">Profile Page</Link></li>
          <li><Link href="/labs" className="text-blue-600 hover:underline">Lab Exercises</Link></li>
        </ul>
      </nav>

      <section>
        <h2 className="text-2xl font-semibold mb-2">About this submission</h2>
        <p>This landing page is part of Assignment 1 for Web Development (Next.js + Tailwind).</p>
      </section>
    </main>
  );
}
