"use client"

import Image from "next/image"
import ForgotPasswordPage from "./ForgotPasswordPage"

export default function ForgotPassword() {
  return (
    <div className="relative min-h-fit bg-gradient-to-br from-cyan-400 via-blue-500 to-pink-500 flex items-center justify-center px-4">
      <Image
        src="/circle-scatter-haikei.svg"
        alt="Background pattern"
        className="absolute inset-0 w-full h-full opacity-50 md:opacity-5 object-cover z-0 pointer-events-none"
        width={1920}
        height={1080}
        priority
      />

      <div className="relative z-10 w-full max-w-md">
        <ForgotPasswordPage />
      </div>
    </div>
  )
}
