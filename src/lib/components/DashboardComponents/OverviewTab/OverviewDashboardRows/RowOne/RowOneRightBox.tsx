"use client";
import CommonDashboardBox, {
  DashboardBoxTitle,
} from "@/lib/atoms/Boxes/CommonDashboardBox";

export default function RowOneRightBox() {
  const trClasses = "border-b-0";
  const tdClasses = "p-0 pb-2";

  return (
    <CommonDashboardBox>
      <DashboardBoxTitle heading="Teamwise Attendance" />
      <div className="pt-4">
        <table className="table ">
          <tbody>
            <tr className={trClasses}>
              <td className={`${tdClasses} font-bold`}>Frontend Team</td>
              <td className={tdClasses}>85%</td>
              <td className={tdClasses}>15 members</td>
            </tr>
            <tr className={trClasses}>
              <td className={`${tdClasses} font-bold`}>Backend Team</td>
              <td className={tdClasses}>92%</td>
              <td className={tdClasses}>12 members</td>
            </tr>
            <tr className={trClasses}>
              <td className={`${tdClasses} font-bold`}>Design Team</td>
              <td className={tdClasses}>78%</td>
              <td className={tdClasses}>8 members</td>
            </tr>
            <tr className={trClasses}>
              <td className={`${tdClasses} font-bold`}>QA Team</td>
              <td className={tdClasses}>88%</td>
              <td className={tdClasses}>6 members</td>
            </tr>
          </tbody>
        </table>
      </div>
    </CommonDashboardBox>
  );
}
