"use client";

import Image from "next/image";

export default function StartupLoader() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-950">
     <div className="w-70 h-30 md:w-150 md:h-70 relative">
       <Image
        src="/logo.png"
        alt="Work Manager Logo"
        fill
        className="animate-pulse"
      />
     </div>
    </div>
  );
}