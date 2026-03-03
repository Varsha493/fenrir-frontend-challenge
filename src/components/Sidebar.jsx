import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const loc = useLocation();

  return (
    <aside className="sidebar">
      <h2>aps</h2>

      <Link className={loc.pathname==="/dashboard"?"active":""}
        to="/dashboard">Dashboard</Link>

      <a>Projects</a>
      <a>Scans</a>
      <a>Schedule</a>
      <a>Notifications</a>
      <a>Settings</a>
      <a>Support</a>
    </aside>
  );
}