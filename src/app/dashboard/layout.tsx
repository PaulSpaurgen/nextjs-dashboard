import Button from "@/lib/atoms/Common/Button";
import { MdOutlineMessage } from "react-icons/md";
import {IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser  } from "react-icons/fa";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100 h-[100vh] overflow-hidden">
      <div className=" flex py-2 pt-4 px-4 justify-end items-center gap-2">
        <Button
          variant="primaryShaded"
          className="text-xs font-bold !rounded-full bg-white text-xl text-black p-4 "
          iconPosition="right"
          Icon={MdOutlineMessage}
        />
         <Button
          variant="primaryShaded"
          className="text-xs font-bold !rounded-full bg-white text-xl text-black p-4 "
          iconPosition="right"
          Icon={IoIosNotificationsOutline}
        />
        <Button
          variant="primaryShaded"
          className="text-xs px-4 font-bold !rounded-2xl bg-white text-sm text-black p-4 "
          Icon={FaRegUser}
        >
           gspaurgen@gmail.com
        </Button>
      </div>
      {children}
    </div>
  );
}
