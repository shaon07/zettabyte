"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="p-6">Loading session...</div>;
  }

  if (!session) {
    return (
      <div className="p-6 max-w-xl">
        <h1 className="text-2xl font-semibold mb-2">Profile</h1>
        <p className="text-muted-foreground mb-4">You are not signed in.</p>
        <button
          onClick={() => signIn("google")}
          className="rounded-md border px-4 py-2 text-sm bg-secondary hover:bg-accent"
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl space-y-4">
      <div className="flex items-center gap-3">
        {session.user?.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={session.user.image}
            alt="avatar"
            className="h-12 w-12 rounded-full"
          />
        ) : null}
        <div>
          <div className="text-xl font-semibold">{session.user?.name}</div>
          <div className="text-sm text-muted-foreground">
            {session.user?.email}
          </div>
        </div>
      </div>
      <button
        onClick={() => signOut()}
        className="rounded-md border px-4 py-2 text-sm bg-secondary hover:bg-accent"
      >
        Sign out
      </button>
    </div>
  );
}
