"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: number[];
  labels: string[];
  colors?: string[];
  className?: string;
}

export default function PieChart({
  data,
  labels,
  colors = ["#456cff", "#ed76ed"],
  className,
}: PieChartProps) {

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
  };

  return (
    <div className="w-fit h-fit">
      <div className={`w-[200px] h-[200px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] ${className}`}>
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
}
