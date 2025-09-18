"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();

  // default values
  const [username, setUsername] = useState("student123");
  const [firstName, setFirstName] = useState("Harshil");
  const [lastName, setLastName] = useState("Parmar");
  const [password, setPassword] = useState("pass123");
  const [dob, setDob] = useState("2000-01-01");
  const [email, setEmail] = useState("student@example.com");
  const [role, setRole] = useState("student");

  const handleSignout = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/kambaz/account/signin");
  };

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Kambaz - Profile</h1>
      <form className="flex flex-col gap-4 border p-4 rounded-xl shadow">
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
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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

        <label className="flex flex-col">
          Date of Birth:
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Role:
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="admin">Admin</option>
            <option value="guest">Guest</option>
          </select>
        </label>

        <button
          onClick={handleSignout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Sign Out
        </button>
      </form>

      <div className="mt-4 text-center">
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          ← Back to Landing Page
        </Link>
      </div>
    </main>
  );
}
