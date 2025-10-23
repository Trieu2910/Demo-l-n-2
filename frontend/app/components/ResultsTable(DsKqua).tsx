// app/components/ResultsTable.tsx
export default function ResultsTable() {
  const results = [
    {
      name: "Hồ Công Hiếu",
      position: "Frontend Developer",
      score: 85,
      status: "Pass",
    },
    {
      name: "Trần Thị B",
      position: "Backend Developer",
      score: 62,
      status: "Fail",
    },
  ];

  return (
    <div className="overflow-x-auto rounded-box bg-base-100 shadow-md">
      <table className="table">
        <thead>
          <tr>
            <th>Ứng viên</th>
            <th>Vị trí</th>
            <th>Điểm</th>
            <th>Kết quả</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => (
            <tr key={i}>
              <td>{r.name}</td>
              <td>{r.position}</td>
              <td>{r.score}</td>
              <td>
                <span
                  className={`badge ${
                    r.status === "Pass"
                      ? "badge-success"
                      : "badge-error"
                  }`}
                >
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
