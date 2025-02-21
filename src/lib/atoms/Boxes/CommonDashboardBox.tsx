
import { FaRegCircleQuestion } from "react-icons/fa6";
import { Tooltip } from "../Common/Tooltip";
import { useEffect , useRef} from "react";
import gsap from "gsap";


export default function CommonDashboardBox({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {

   const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.fromTo(boxRef.current, {
        opacity: 0,
        duration: 0.6,
        y: 100,
        ease: "power2.inOut",
      }, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, []);
  return <div className={`bg-white rounded-md px-4 py-2 ${className}`} ref={boxRef}>{children}</div>;
}

export function DashboardBoxTitle({
  children,
  heading,
  isUnderlined = true,
  className = "",
  isToolTipped,
  tooltipText,
}: {
  children?: React.ReactNode;
  heading?: string;
  isUnderlined?: boolean;
  isToolTipped?: boolean;
  className?: string;
  tooltipText?: string;
}) {

  return (
    <div
      className={`pb-[1px] w-full flex justify-between items-center w-fit ${
        isUnderlined ? "border-b-[1px] border-gray-300" : ""
      }`}
    >
        <h2 className={`text-md font-bold flex items-center gap-2 ${className}`}>{heading} 

        {isToolTipped && (
          <Tooltip text={tooltipText}>
            <FaRegCircleQuestion className="w-3 h-3" />
          </Tooltip>
        )}
      </h2>
      {children}
    </div>
  );
}
