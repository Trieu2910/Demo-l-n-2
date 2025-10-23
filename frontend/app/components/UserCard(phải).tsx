"use client";
export default function UserCard() {
  return (
    <aside className="w-64 bg-base-200 p-4 rounded-box">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">User Info</h2>
          <p>Some details or ads</p>
          <button className="btn btn-sm btn-secondary">Action</button>
        </div>
      </div>
    </aside>
  );
}
