export default function CandidateTable() {
  return (
    <div className="overflow-x-auto rounded-box bg-base-100 shadow-md">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <input type="checkbox" className="checkbox" />
            </th>
            <th>Ứng viên</th>
            <th>Vị trí</th>
            <th>Kỹ năng nổi bật</th>
            <th>CV</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <input type="checkbox" className="checkbox" />
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hồ Công Hiếu</div>
                  <div className="text-sm opacity-50">Tộc miền núi</div>
                </div>
              </div>
            </td>
            <td>
              Frontend Developer
              <br />
              <span className="badge badge-ghost badge-sm">React, Next.js</span>
            </td>
            <td>UI/UX</td>
            <td>
              <a
                href="/cv/modern-entry-level-resume.pdf"
                download
                className="btn btn-sm btn-primary"
              >
                Tải CV
              </a>
            </td>
          </tr>

          {/* row 2 */}
          <tr>
            <th>
              <input type="checkbox" className="checkbox" />
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Trần Thị B</div>
                  <div className="text-sm opacity-50">TP.HCM</div>
                </div>
              </div>
            </td>
            <td>
              Backend Developer
              <br />
              <span className="badge badge-ghost badge-sm">Node.js, MongoDB</span>
            </td>
            <td>Database</td>
            <td>
              <a
                href="/cv/modern-entry-level-resume.pdf"
                download
                className="btn btn-sm btn-primary"
              >
                Tải CV
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
