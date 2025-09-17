import Button from "@/components/atoms/button";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

type ProfileCardProps = {
  session: Session;
};

export default function ProfileCard({ session }: ProfileCardProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center flex flex-col gap-3">
        <img
          src={session.user?.image ?? ""}
          alt="profile"
          className="w-24 h-24 mx-auto rounded-full shadow-md border-2 border-gray-200"
        />
        <h2 className="mt-4 text-lg font-semibold text-gray-800">
          {session.user?.name}
        </h2>
        <p className="text-sm text-gray-500">{session.user?.email}</p>

        <Button onClick={() => signOut({ callbackUrl: "/profile" })}>
          Sign out
        </Button>
      </div>
    </div>
  );
}
