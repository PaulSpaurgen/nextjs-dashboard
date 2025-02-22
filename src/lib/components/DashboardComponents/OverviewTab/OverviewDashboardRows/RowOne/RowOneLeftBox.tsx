"use client";
import React from "react";
import CommonDashboardBox, {
  DashboardBoxTitle,
} from "@/lib/atoms/Boxes/CommonDashboardBox";
import { FaStar } from "react-icons/fa";
import SemiCircle from "@/lib/atoms/Charts/SemiCircle";



export default function RowOneLeftBox() {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CommonDashboardBox>
          <DashboardBoxTitle
            heading="Real time status"
            isToolTipped
            tooltipText="This is a tooltip"
          />
          <div className="w-full h-full flex justify-center items-center flex-col ">
            <div className="flex gap-4 w-full pt-4 ">
              <PunchInOutCard label="Punched In" value={6} icon={<FaStar />} />
              <PunchInOutCard label="Punched Out" value={9} icon={<FaStar />} />
            </div>
            <SemiCircle
                data={[6, 3]}
                labels={["Punched In", "Punched Out"]}
                value={9}
                label="All Employees"
              />
          </div>
        </CommonDashboardBox>
        <div className="h-full flex flex-col gap-4">
          <CommonDashboardBox className="h-1/2">
            <DashboardBoxTitle
              heading="Punched In (Inactive) Employees"
              isToolTipped
              tooltipText="This is a tooltip"
              isUnderlined={false}
            />
            <div className="flex w-full h-[80%] justify-center items-center  font-bold text-2xl min-h-[100px]">
              <p>3</p>
            </div>
          </CommonDashboardBox>
          <CommonDashboardBox className="h-1/2">
            <DashboardBoxTitle
              heading="Punched In (Inactive) Employees"
              isToolTipped
              tooltipText="This is a tooltip"
              isUnderlined={false}
            />
            <div className="flex w-full h-[80%] justify-center items-center  font-bold text-2xl min-h-[100px]">
              <p>0 / 0</p>
            </div>
          </CommonDashboardBox>
        </div>
      </div>
    </React.Fragment>
  );
}

export function PunchInOutCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col  items-center">
      <div className="flex gap-2 items-center justify-center">
        <span>{icon || <FaStar />}</span>
        <span className="text-sm md:text-md font-bold mt-[2px] ">{value}</span>
      </div>
      <p className="text-xs md:text-sm font-bold w-full text-center">{label}</p>
    </div>
  );
}
