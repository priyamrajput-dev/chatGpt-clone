import { onBoard } from "@/features/auth/actions/onboard";
import { auth } from "@clerk/nextjs/server"
import React from "react";

const RootLayoutGroup = async ({ children }: { children: React.ReactNode }) => {
  await auth.protect();
  await onBoard();
  return (
    <div>{children}</div>
  )
}

export default RootLayoutGroup;