import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

interface BarGraphProps {
  data: number[];
  labels: string[];
  colors?: string[];
  className?: string;
  label?: string;
}

export default function BarGraph({
  data,
  labels,
  colors = ["#456cff", "#ed76ed"],
  label,
  className,
}: BarGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let chart: Chart;
    if (canvasRef.current) {
      chart = new Chart(canvasRef.current, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: colors,
              borderColor: colors,
              borderWidth: 1,
              barThickness: 20,
              categoryPercentage: 1.0, // Makes bars take up 100% of category width
              barPercentage: 1.0, // Makes bars take up 100% of available space
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      });
    }
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div className="w-fit h-fit relative">
      <canvas ref={canvasRef} className={`w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] ${className} ${label ? "ml-10" : ""}`}></canvas>
      {label && <div className="  absolute top-1/2 -translate-y-1/2 rotate-[-90deg] left-[-30px] font-semibold text-xs md:text-sm">{label}</div>}
    </div>
  );
}
