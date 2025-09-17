import Button from "@/components/atoms/button";
import { signIn } from "next-auth/react";

export default function SigninCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-gray-800">Profile</h2>
        <p className="mt-1 text-sm text-gray-500">You are not signed in.</p>

        <Button onClick={() => signIn("google", { callbackUrl: "/profile" })}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
