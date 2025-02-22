"use client";
import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface InputProps {
  label?: string;
  sticker?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  type?: string;
  placeholder?: string;
}

export default function Input({
  value,
  onChange,
  className = "",
  type = "text",
  placeholder,
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={`flex items-center gap-2 w-full px-4 py-[12px] rounded-lg bg-gray-100 ${className}`}>
      <FaSearch className="text-gray-500" />
      <input
        ref={inputRef}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className={`w-full outline-none bg-transparent text-sm `}
      />
    </div>
  );
}
