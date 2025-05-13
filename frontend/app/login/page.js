"use client";

import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const handleSubmit = () => {
    console.log("Login attempted");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-12  w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-1.5  text-center">
          Welcome Back!
        </h1>
        <p className="text-center mb-6 text-base">
          Enter your credentials to access your account.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-base text-slate-800 font-medium translate-x-0.5"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-base font-medium text-slate-800 translate-x-0.5"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
          <Link
            href="/dashboard"
            className="w-full block text-center bg-red-500 font-medium text-lg py-2 px-4 cursor-pointer rounded-2xl hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mt-4"
          >
            Log In
          </Link>
          <p className="text-center mt-6 text-lg">
            Forget your password?
            <span className="text-red-700"> Reset password</span>
          </p>
        </form>
      </div>
    </div>
  );
}
