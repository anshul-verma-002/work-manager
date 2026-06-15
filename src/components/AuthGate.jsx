"use client";

import { useContext } from "react";
import UserContext from "../context/userContext";
import StartupLoader from "./StartupLoader";
import { useRouter } from "next/navigation";

export default function AuthGate({ children }) {
  const { loading } = useContext(UserContext);

  const router = useRouter()

  if (loading) {
    return <StartupLoader />

  }

  return children;
}