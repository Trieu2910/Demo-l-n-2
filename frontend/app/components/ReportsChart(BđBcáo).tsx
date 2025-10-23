"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ReportsChart() {
  const [date, setDate] = useState("today");

  // 🔹 Mock dữ liệu pass/fail
  const reportData: any = {
    today: { labels: ["Pass", "Fail"], data: [12, 8] },
    "7days": { labels: ["Pass", "Fail"], data: [50, 30] },
    "30days": { labels: ["Pass", "Fail"], data: [200, 120] },
    "6months": { labels: ["Pass", "Fail"], data: [600, 400] },
    year: { labels: ["Pass", "Fail"], data: [1200, 800] },
  };

  const chartData = {
    labels: reportData[date].labels,
    datasets: [
      {
        label: "Ứng viên",
        data: reportData[date].data,
        backgroundColor: ["#4CAF50", "#F44336"], // Xanh = Pass, Đỏ = Fail
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Báo cáo kết quả ứng tuyển" },
    },
  };

  return (
    <div className="card bg-base-100 shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="card-title">Thống kê Pass/Fail</h2>
        <select
          className="select select-bordered select-sm"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        >
          <option value="today">Today</option>
          <option value="7days">Last 7 Days</option>
          <option value="30days">Last 30 Days</option>
          <option value="6months">Last 6 Months</option>
          <option value="year">This Year</option>
        </select>
      </div>
      <Bar data={chartData} options={options} />
    </div>
  );
}
