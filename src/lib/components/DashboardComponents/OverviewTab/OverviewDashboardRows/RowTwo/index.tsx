"use client";
import React from "react";
import Table from "@/lib/atoms/Table";
import CommonDashboardBox, {
  DashboardBoxTitle,
} from "@/lib/atoms/Boxes/CommonDashboardBox";
import EmployeeTableRow from "../TableComponents/EmployeeTableRow";
import Select from "@/lib/atoms/Common/Dropdown";
import Input from "@/lib/atoms/Common/Input";
import { employeeData, offDutyEmployeeData } from "@/lib/Utills/staticData";

export default function OverviewTabRowTwo() {
  const headers = [
    { title: "Employee", isSortable: true },
    { title: "Attendance", isSortable: false },
    { title: "Last Location", isSortable: false },
  ];


  return (
    <React.Fragment>
      <CommonDashboardBox className="w-full overflow-x-auto">
        <DashboardBoxTitle heading="Employees (9)" isUnderlined={false}>
          <div className="flex items-center gap-2">
            <Select
              label="All"
              options={[
                {
                  label: "All",
                  value: "all",
                },
                {
                  label: "Present",
                  value: "present",
                },
                {
                  label: "Absent",
                  value: "absent",
                },
              ]}
              className="w-[145px]"
              sticker="New"
            />
            <Input placeholder="Search Here" className="w-[180px]" />
          </div>
        </DashboardBoxTitle>
        <div className="pt-4 min-w-[500px] md:min-w-fit  ">
          <Table headers={headers} >
            {employeeData.map((employee, index) => (
              <EmployeeTableRow isLeftBorder key={employee.employeeStatusId} employee={employee} />
            ))}
          </Table>
        </div>
      </CommonDashboardBox>

      <CommonDashboardBox className="w-full overflow-x-auto">
        <DashboardBoxTitle
          heading="Off Duty Employees (1)"
          isUnderlined={false}
        >
          <div className="flex items-center gap-2 w-full md:w-1/2" >
            <Select
              label="All"
              options={[
                {
                  label: "All",
                  value: "all",
                },
                {
                  label: "Present",
                  value: "present",
                },
                {
                  label: "Absent",
                  value: "absent",
                },
                
              ]}
              className="w-[120px]"
            />
            <Select
              label="All"
              options={[
                {
                  label: "All",
                  value: "all",
                },
                {
                  label: "Present",
                  value: "present",
                },
                {
                  label: "Absent",
                  value: "absent",
                },
              ]}
              className="w-[120px]"
            />
            <Input placeholder="Search Here" className="w-[180px]" />
          </div>
        </DashboardBoxTitle>
        <div className="pt-4 min-w-[500px] md:min-w-fit">
          <Table headers={headers}>
            {offDutyEmployeeData.map((employee, index) => (
              <EmployeeTableRow isLeftBorder={false} key={employee.employeeStatusId} employee={employee} />
            ))}
          </Table>
        </div>
      </CommonDashboardBox>
    </React.Fragment>
  );
}
