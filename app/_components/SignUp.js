"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-bold text-black mb-1.5">
          Create an account
        </h1>
        <p className="text-base mb-8 pl-0.5">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-red-500 underline font-medium decoration-red-500"
          >
            Log in
          </Link>
        </p>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                placeholder="First name"
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <div>
              <input
                placeholder="Last name"
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-black" />
              ) : (
                <Eye className="h-5 w-5 text-black" />
              )}
            </button>
          </div>

          <Link
            href="/login"
            className="w-full block text-center bg-red-500 font-medium text-lg py-2 px-4 cursor-pointer rounded-2xl hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mt-4"
          >
            Create account
          </Link>

          <div className="relative mt-8 mb-8">
            <div className="absolute inset-1 flex items-center">
              <span className="w-full border-t border-gray-300"></span>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-black">Or register with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center font-medium space-x-2 border border-gray-300 py-2 rounded-md cursor-pointer hover:bg-gray-100">
              <FcGoogle className="h-5 w-5" />
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center font-medium space-x-2 border border-gray-300  py-2 rounded-md cursor-pointer hover:bg-gray-100">
              <FaApple className="h-5 w-5" />
              <span>Apple</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
