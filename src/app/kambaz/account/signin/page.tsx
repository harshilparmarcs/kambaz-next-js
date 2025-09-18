"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SigninPage() {
  const router = useRouter();
  const [username, setUsername] = useState("student123");
  const [password, setPassword] = useState("pass123");

  const handleSignin = (e: React.FormEvent) => {
    e.preventDefault();
    // navigate to Profile (or Dashboard)
    router.push("/kambaz/account/profile");
  };

  const handleSignup = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/kambaz/account/signup"); // if you add signup later
  };

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Kambaz - Signin</h1>
      <form
        onSubmit={handleSignin}
        className="flex flex-col gap-4 border p-4 rounded-xl shadow"
      >
        <label className="flex flex-col">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Sign In
        </button>

        <button
          onClick={handleSignup}
          className="text-blue-600 underline text-sm"
        >
          Don’t have an account? Sign Up
        </button>
      </form>
      <Link href="/" className="text-sm text-blue-600 hover:underline text-center">
        Back to Landing Page
      </Link>
    </main>
  );
}
