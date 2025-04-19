import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">SmartReplier</h1>
      <button
        onClick={() => signIn("google")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Entrar com Google
      </button>
    </main>
  );
}
