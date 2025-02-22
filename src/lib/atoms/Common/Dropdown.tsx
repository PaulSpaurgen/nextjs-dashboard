"use client";
import React from "react";
import { useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface SelectProps {
  label?: string;
  sticker?: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function Select({
  label,
  sticker,
  options,
  value,
  onChange,
  className = "",
}: SelectProps) {
  const selectRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState(false);

  const labelActiveClass = "top-[-10px] left-[20px]";
  const labelInactiveClass = "top-1/2 left-[20px] -translate-y-1/2";

  const focusAllElements = () => {
    selectRef.current?.focus();
    setIsActive(true);
  };

  const blurAllElements = () => {
    selectRef.current?.blur();
    setIsActive(false);
  };

  return (
    <div className={`relative px-4 py-[12px]  bg-white rounded-full border-[1px] border-gray-300 ${className}`}>
      {label && (
        <button
          className={`flex items-center  gap-4 absolute transition-all duration-300 ease-in-out ${
            isActive ? labelActiveClass : labelInactiveClass
          }`}
          onClick={focusAllElements}
        >
          <label className="text-sm font-bold text-gray-700 bg-white px-[1px]">
            {label}
          </label>
          {
            sticker && !isActive && (
              <span className="rounded-xl bg-primary text-white p-2 text-xs font-bold ">
                {sticker}
              </span>
            )
          }
        </button>
      )}
      <div className="flex justify-between w-full">
        <input
          type="text"
          className="w-full outline-none bg-transparent text-sm"
          onFocus={focusAllElements}
          onBlur={blurAllElements}
          ref={selectRef}
        />
        <button
          className={`text-sm text-gray-700 relative z-10 ${
            isActive ? "rotate-180" : ""
          } transition-all duration-300 ease-in-out`}
        >
          <IoMdArrowDropdown className="w-4 h-4" />
        </button>
      </div>

      {isActive && (
        <div className="absolute top-full mt-[10px] left-0 w-full bg-white rounded-b-lg shadow-md z-10 border-[1px] border-gray-300">
          {options.map((option) => (
            <div key={option.value} className="px-2 py-1 hover:bg-gray-100 cursor-pointer text-sm ">
              {option.label}    
            </div>
          ))}
        </div>

      )}
    </div>
  );
}
