
import { FaSpinner } from "react-icons/fa";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <FaSpinner className="animate-spin text-primary text-4xl " />
    </div>
  );
}


