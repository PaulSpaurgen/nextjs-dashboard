export default function EmployeeNameCard({
  name,
  employeeStatusId = "",
}: {
  name: string;
  employeeStatusId?: string;
}) {
  const returnIntials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <div className="flex gap-2 h-full items-center">
       
       <div className="h-[70%] w-[2px] bg-black rounded-lg"/>

      <div className="flex items-center gap-2 ">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-sm font-medium">{returnIntials(name)}</span>
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-medium">{name}</div>
          <div className="text-xs text-gray-500">{employeeStatusId}</div>
        </div>
      </div>
    </div>
  );
}
