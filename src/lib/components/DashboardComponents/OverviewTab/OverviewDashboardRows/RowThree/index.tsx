import React from "react";
import CommonDashboardBox, {
  DashboardBoxTitle,
} from "@/lib/atoms/Boxes/CommonDashboardBox";
import { dataRowThreeLeftBox, InnerBoxUI } from "./RowThreeHelperComponents";
import PieChart from "@/lib/atoms/Charts/PieChart";
import { dataRowThreeRightBox, ExpenseItem } from "./RowThreeHelperComponents";
import { GoDotFill } from "react-icons/go";
import { FaDotCircle } from "react-icons/fa";

export default function OverviewTabRowThree() {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {dataRowThreeLeftBox.map((item) => (
          <InnerBoxUI key={item.heading} {...item} />
        ))}
      </div>
      <CommonDashboardBox>
        <DashboardBoxTitle heading="Excepense Overview" isUnderlined={false} />
        <div className="flex justify-between flex-col sm:flex-row gap-4 py-6 px-6 items-center">
          <PieChart data={[100, 200]} labels={["Food", "Transport"]} />
          <div className="grid grid-cols-2 gap-4 h-fit">
            {dataRowThreeRightBox.map((item, index) => (
              <ExpenseItem
                key={item.label}
                isIcon={index !== 0}
                icon={
                  <GoDotFill className="text-sm" />
                }
                label={item.label}
                value={item.value.toString()}
              />
            ))}
          </div>
        </div>
      </CommonDashboardBox>
    </React.Fragment>
  );
}
