"use client";
import React from "react";
import Table from "@/lib/atoms/Table";
import CommonDashboardBox, {
  DashboardBoxTitle,
} from "@/lib/atoms/Boxes/CommonDashboardBox";
import EmployeeTableRow from "../TableComponents/EmployeeTableRow";

export default function OverviewTabRowTwo() {
  const headers = [
    { title: "Employee", isSortable: true },
    { title: "Attendance", isSortable: false },
    { title: "Last Location", isSortable: false },
  ];
  return (
    <React.Fragment>
      <CommonDashboardBox className="w-full overflow-x-auto">
        <DashboardBoxTitle heading="Employees (9)" isUnderlined={false} />
        <div className="pt-4 min-w-[600px]">
          <Table headers={headers}>
            <EmployeeTableRow />
          </Table>
        </div>
      </CommonDashboardBox>

      <CommonDashboardBox className="w-full overflow-x-auto">
        <DashboardBoxTitle heading="Off Duty Employees (1)" isUnderlined={false} />
        <div className="pt-4 min-w-[600px]">
          <Table headers={headers}>
            <EmployeeTableRow />
          </Table>
        </div>
      </CommonDashboardBox>
    </React.Fragment>
  );
}
