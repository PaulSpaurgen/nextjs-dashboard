"use client";

import OverviewTabRowOne from "./OverviewDashboardRows/RowOne";
import OverviewTabRowTwo from "./OverviewDashboardRows/RowTwo";
import OverviewTabRowThree from "./OverviewDashboardRows/RowThree";
import OverviewTabRowFour from "./OverviewDashboardRows/RowFour";
import Button from "@/lib/atoms/Common/Button";
import { FaArrowDown } from "react-icons/fa";

export default function OverviewTab() {
  return (
    <div className="">
     <div className="flex w-full justify-between py-4 flex-col sm:flex-row gap-2">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold ">Realtime Dashboard</h1>
      <Button variant="primary" Icon={FaArrowDown} className="w-fit ">Attendance Status</Button>
     </div>
      
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
      <OverviewTabRowOne />
      <OverviewTabRowTwo />
      <OverviewTabRowThree />
      <OverviewTabRowFour />
    </div>

    </div>
  );
}
