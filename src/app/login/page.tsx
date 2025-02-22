"use client";

import React from "react";
import Image from "next/image";
import Input from "@/lib/atoms/Common/Input";
import Button from "@/lib/atoms/Common/Button";
import { redirect } from "next/navigation";

export default function LoginPage() {
    
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col items-center mb-2">
          <div className="w-32 h-32 relative mb-4">
            <Image
              src="/assets/logo.webp"
              alt="Company Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Please sign in to continue</p>
        </div>

        <form className="space-y-6">
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              className="w-full"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              className="w-full"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
              Forgot password?
            </a>
          </div>
          <Button
            variant="primary"
            className="w-full"
            onClick={() => {
              redirect("/dashboard");
            }}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
