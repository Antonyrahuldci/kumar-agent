// import { AppEditor } from "@/components/editor";

// export default function ProjectsNewPage() {
//   return <AppEditor />;
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Simple authentication logic (replace with real API call)
    if (username === "admin" && password === "password123") {
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Login successful!");
      router.push("/editor"); // Redirect to editor page
    } else {
      toast.error("Invalid username or password!");
    }
  };

  return (
    <section className="flex items-center justify-center h-screen bg-neutral-950 text-white">
      <form
        onSubmit={handleLogin}
        className="bg-neutral-900 p-8 rounded-xl w-full max-w-sm shadow-lg"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 bg-neutral-800 rounded-lg focus:outline-none focus:ring focus:ring-sky-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-neutral-800 rounded-lg focus:outline-none focus:ring focus:ring-sky-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg"
        >
          Login
        </button>
      </form>
    </section>
  );
}
