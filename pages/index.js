import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main style={{ padding: 20 }}>
      <h1>SmartReplier Dev</h1>
      {!session && (
        <>
          <p>Não estás autenticado.</p>
          <button onClick={() => signIn("google")}>Entrar com Google</button>
        </>
      )}
      {session && (
        <>
          <p>Bem-vindo, {session.user.email}</p>
          <pre>{JSON.stringify(session, null, 2)}</pre>
          <button onClick={() => signOut()}>Sair</button>
        </>
      )}
    </main>
  );
}
