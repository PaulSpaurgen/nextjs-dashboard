import CommonDashboardBox, {
  DashboardBoxTitle,
} from "@/lib/atoms/Boxes/CommonDashboardBox";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export const dataRowThreeLeftBox = [
  {
    heading: "Forms Filled",
    value: 100,
    percentage: 10,
    isUp: true,
    timeTag: "0 Yesterday",
  },
  {
    heading: "Photos Uploaded",
    value: 100,
    percentage: 10,
    isUp: true,
    timeTag: "1 Yesterday",
  },
  {
    heading: "New Clients",
    value: 100,
    percentage: 10,
    isUp: true,
    timeTag: "0 Yesterday",
  },
  {
    heading: "Orders Submitted",
    value: 100,
    percentage: 10,
    isUp: true,
    timeTag: "1 Yesterday",
  },
];

export const dataRowThreeRightBox = [
  {
    label: "Total Expenses",
    value: 100,
  },
  {
    label: "Pending Expenses",
    value: 100,
  },
  {
    label: "Approved Expenses",
    value: 100,
  },
  {
    label: "Rejected Expenses",
    value: 100,
  },
  {
    label: "Paid Out",
    value: 100,
  },
];

export function InnerBoxUI({
  heading,
  value,
  percentage,
  isUp,
  timeTag,
}: {
  heading: string;
  value: number;
  percentage: number;
  isUp: boolean;
  timeTag: string;
}) {
  return (
    <CommonDashboardBox className="flex flex-col gap-2">
      <DashboardBoxTitle
        heading={heading}
        isUnderlined={false}
        className="text-lg"
      />
      <div className="flex gap-[1px]">
        <p className="text-2xl font-bold">{value}</p>
        <div className="text-xs text-gray-500 flex items-center gap-[1px]">
          <span>{isUp ? <FaArrowUp /> : <FaArrowDown />}</span>
          <span>{percentage}%</span>
        </div>
      </div>
      <p className="text-sm text-gray-800 w-fit rounded-md bg-gray-100 px-2 py-1 border border-gray-200">
        {timeTag}
      </p>
    </CommonDashboardBox>
  );
}

export function ExpenseItem({
  icon,
  label,
  value,
  isIcon = true,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  isIcon?: boolean;
}) {
  return (
    <div className="flex flex-col gap-[1px] min-w-fit text-xs md:text-sm">
      <div className="flex items-center gap-[1px]">
        {
          isIcon && (
            <div className="w-fit h-fit">{icon}</div>
          )
        }

        <span className={`text-gray-700  font-bold ${!isIcon ? "ml-2" : ""}`}>{label}</span>
      </div>
      <span className="font-medium ml-[3px] md:ml-2 text-gray-700">{value}</span>
    </div>
  );
}
