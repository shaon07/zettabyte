"use client";

import { useSession } from "next-auth/react";
import Loader from "../atoms/loader";
import ProfileCard from "../modules/profile/profile-card";
import SigninCard from "../modules/profile/signin-card";

export default function ProfileContainer() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex flex-col gap-4 items-center justify-center">
        <Loader />
        <div className="p-6">Loading session...</div>
      </div>
    );
  }

  if (!session) {
    return <SigninCard />;
  }

  return <ProfileCard session={session} />;
}
