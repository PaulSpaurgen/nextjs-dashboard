"use client";

import React from "react";
import { FaRegUser } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { PiSquaresFour } from "react-icons/pi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuCalendarPlus2 } from "react-icons/lu";
import Image from "next/image";
import Button from "@/lib/atoms/Common/Button";
import { PiCaretUpDownFill } from "react-icons/pi";
import { useState, useRef } from "react";
import { MdOutlineClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import gsap from "gsap";

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navBarRef = useRef<HTMLDivElement>(null);

  const navItems = [
    {
      label: "Dashboard",
      icon: PiSquaresFour,
      href: "/dashboard",
      isActive: pathname === "/dashboard",
    },
    {
      label: "Attendance ",
      icon: LuCalendarPlus2,
      href: "/attendance",
      isActive: pathname === "/attendance",
    },
    {
      label: "Leaves",
      icon: IoCalendarNumberOutline,
      href: "/leaves",
      isActive: pathname === "/leaves",
    },
    {
      label: "Organizations",
      icon: FaRegUser,
      href: "/organizations",
      isActive: pathname === "/organizations",
    },
  ];

  const handleClose = () => {
    gsap.to(navBarRef.current, {
      x: -260,
      duration: 0.3,
      display: "none",
      ease: "power2.inOut",
    });
  };

  const handleOpen = () => {
    gsap.to(navBarRef.current, {
      x: 0,
      duration: 0.3,
      display: "block",
      ease: "power2.inOut",
    });
  };

  return (
    <React.Fragment>
      {pathname !== "/login" && (
        <React.Fragment>
          <Button
            variant="primaryShaded"
            className="sm:text-xl text-lg  font-bold m-4 xl:hidden h-fit w-fit absolute top-0 left-2 z-10 "
            iconPosition="right"
            Icon={IoMenu}
            onClick={() => {
              setIsOpen(!isOpen);
              handleOpen();
            }}
          />
          <nav
            className={`bg-white w-[280px] h-screen p-2 flex flex-col gap-2 
          xl:block hidden fixed top-0 z-10 xl:z-0 xl:relative shadow-lg border-r border-gray-200 `}
            ref={navBarRef}
          >
            {isOpen && (
              <Button
                variant="primaryShaded"
                className="text-xs font-bold absolute top-2 right-[-40px] z-10"
                iconPosition="right"
                Icon={MdOutlineClose}
                onClick={() => {
                  setIsOpen(!isOpen);
                  handleClose();
                }}
              />
            )}

            <div className="w-full my-4 flex justify-between items-center flex-wrap">
              <Image
                src="/assets/logo.webp"
                alt="logo"
                width={86}
                height={86}
              />
              <Button
                variant="primaryShaded"
                className="text-xs font-bold "
                iconPosition="right"
                Icon={PiCaretUpDownFill}
              >
                Professional
              </Button>
            </div>
            {navItems.map((item, index) => (
              <a
                key={`${index}-tab`}
                className={`flex items-center gap-2 py-2 px-2 rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-300  ${
                  item.isActive ? "bg-primary/10 text-primary" : "text-gray-600"
                }`}
                href={item.href}
              >
                <item.icon />
                <span className="font-semibold text-sm">{item.label}</span>
              </a>
            ))}
          </nav>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
