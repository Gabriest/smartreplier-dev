import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const session = useSession();

  const user = session?.data?.user;

  return (
    <main style={{ padding: 20 }}>
      <h1>SmartReplier Dev</h1>

      {!user ? (
        <>
          <p>Não estás autenticado.</p>
          <button onClick={() => signIn("google")}>Entrar com Google</button>
        </>
      ) : (
        <>
          <p>Bem-vindo, {user.email}</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <button onClick={() => signOut()}>Sair</button>
        </>
      )}
    </main>
  );
}
