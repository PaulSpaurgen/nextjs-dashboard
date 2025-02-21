export default function Table({
  headers,
  children,
}: {
  headers: {
    title: string;
    isSortable?: boolean;
    onClick?: () => void;
  }[];
  children?: React.ReactNode;
}) {
  return (
    <div className="border border-gray-200 bg-transparent rounded-md ">
      <table className="table">
        <thead>
          <tr className="border-b border-gray-200">
            {headers.map((header, index) => (
              <th
                key={`${index}-${header.title}`}
                onClick={header.isSortable ? header.onClick : undefined}
                style={{ cursor: header.isSortable ? "pointer" : "default" }}
                className="text-sm font-bold text-gray-500"
              >
                {header.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
}
