"use client";

import React from "react";
import Image from "next/image";
import Input from "@/lib/atoms/Common/Input";
import Button from "@/lib/atoms/Common/Button";
import { redirect } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
    
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full gap-4 max-w-md flex flex-col items-center">
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
        <Button
            variant="primary"
            className="w-fit justify-center"
            onClick={() => {
              redirect("/dashboard");
            }}
            Icon={FaGoogle}
            type="submit"
          >
            Sign In with Google
          </Button>

        <p className="text-center text-gray-600 text-xs mt-4 font-semibold">Note: Click on the google button to login</p>
      </div>
    </div>
  );
}
