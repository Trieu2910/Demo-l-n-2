import Carousel from "./components/Carousel(ảnh)";
import CandidateTable from "./components/CandidateTable(dsCV)";
import ResultsTable from "./components/ResultsTable(DsKqua)";
import ReportsChart from "./components/ReportsChart(BđBcáo)";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-4">
      {/* Giới thiệu */}
      <div className="bg-base-200 rounded-box p-4 shadow-md">
        <h1 className="text-xl font-bold">Danh sách CV ứng tuyển</h1>
        <p>Thông tin các ứng viên đã nộp CV</p>
      </div>

      {/* Slide ảnh */}
      <Carousel />

      {/* Bảng CV */}
      <CandidateTable />

      {/* Kết quả + Báo cáo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultsTable />
        <ReportsChart />
      </div>
    </div>
  );
}
