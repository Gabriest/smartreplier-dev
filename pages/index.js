import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const session = useSession();
  const loading = session.status === "loading";

  if (loading) return <p>A carregar...</p>;

  return (
    <main style={{ padding: 20 }}>
      <h1>SmartReplier Dev</h1>

      {!session.data ? (
        <>
          <p>Não estás autenticado.</p>
          <button onClick={() => signIn("google")}>Entrar com Google</button>
        </>
      ) : (
        <>
          <p>Bem-vindo, {session.data.user.email}</p>
          <pre>{JSON.stringify(session.data, null, 2)}</pre>
          <button onClick={() => signOut()}>Sair</button>
        </>
      )}
    </main>
  );
}
