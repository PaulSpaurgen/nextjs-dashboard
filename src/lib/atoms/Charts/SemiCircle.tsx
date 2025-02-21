"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface SemiCircleProps {
  data: number[];
  labels: string[];
  colors?: string[];
  className?: string;
  value?: number;
  label?: string;
}

export default function SemiCircle({
  data,
  labels,
  colors = ["#456cff", "#ed76ed"],
  className,
  value,
  label,
}: SemiCircleProps) {

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    rotation: -90,
    circumference: 180,
    cutout: '82%',
  };

  return (
    <div className="w-fit h-fit relative">
      <div className={`w-[200px] h-[200px] ${className}`}>
        <Doughnut data={chartData} options={options} />
      </div>
      <div className="text-sm font-bold absolute bottom-[44px] left-1/2 -translate-x-1/2 text-center">
        <p className="text-lg font-bold">{value}</p>
        <p className="mt-[2px]">{label}</p>
      </div>
    </div>
  );
}
