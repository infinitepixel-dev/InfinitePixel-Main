"use client"
import Image from "next/image"

export default function ForgotPassword() {
  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-br from-cyan-400 via-blue-500 to-pink-500 px-4">
      <Image
        src="/circle-scatter-haikei.svg"
        alt="Background pattern"
        className="absolute inset-0 w-full h-full opacity-50 md:opacity-5 object-cover z-0 pointer-events-none"
        width={1920}
        height={1080}
        priority
      />
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Forgot Password</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          This is a placeholder for now. Reset functionality coming soon.
        </p>
      </div>
    </div>
  )
}
