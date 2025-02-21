import EmployeeNameCard from "@/lib/atoms/Common/EmployeeNameCard";

export default function EmployeeTableRow() {
  return (
    <tr className="border-b-[1px] border-gray-200">
      <td>
        <EmployeeNameCard name="John Doe" employeeStatusId="1234567890" />
      </td>
      <td></td>
      <td></td>
    </tr>
  );
}
