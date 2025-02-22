import EmployeeNameCard from "@/lib/atoms/Common/EmployeeNameCard";

export default function EmployeeTableRow({
  isLeftBorder = false,
  employee,
}: {
  isLeftBorder?: boolean;
  employee: {
    name: string;
    employeeStatusId: string;
    attendance: string;
    lastLocation: string;
  };
}) {
  return (
    <tr className="border-b-[1px] border-gray-200">
      <td>
        <EmployeeNameCard name="John Doe" isLeftBorder={isLeftBorder} employeeStatusId="1234567890" />
      </td>
      <td>{employee.attendance}</td>
      <td>{employee.lastLocation}</td>
    </tr>
  );
}
