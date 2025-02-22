import React from "react";
import CommonDashboardBox, {
  DashboardBoxTitle,
} from "@/lib/atoms/Boxes/CommonDashboardBox";
import BarGraph from "@/lib/atoms/Charts/BarGraph";
import { PunchInOutCard } from "../RowOne/RowOneLeftBox";
import SemiCircle from "@/lib/atoms/Charts/SemiCircle";


export default function OverviewTabRowFour() {
  return (
    <React.Fragment>
      <CommonDashboardBox>
        <DashboardBoxTitle
          heading="Daily Average Working Hours"
          isUnderlined={false}
        />
        <div className="pt-4">
          <BarGraph
            data={[0, 0.4, 0.6, 0.8, 0.9]}
            labels={["Mon", "Tue", "Wed", "Thu", "Fri"]}
            label="Working Hours"
          />
        </div>
      </CommonDashboardBox>
      
    <CommonDashboardBox>
          <DashboardBoxTitle
            heading="Real time status"
            isToolTipped
            tooltipText="This is a tooltip"
          />
          <div className="w-full h-full flex justify-center items-center flex-col ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-4 ">
              <PunchInOutCard label="Not Yet Started" value={0} />
              <PunchInOutCard label="delayed"value={0} />
              <PunchInOutCard label="In Progress" value={0}  />
              <PunchInOutCard label="Completed" value={1} />
            </div>
            <SemiCircle
                data={[6, 3]}
                labels={["Punched In", "Punched Out"]}
                value={1}
                label="Total Tasks"
              />
          </div>
        </CommonDashboardBox>
    </React.Fragment>
  );
}
