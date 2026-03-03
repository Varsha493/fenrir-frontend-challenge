import Sidebar from "../components/Sidebar";
import ScanTable from "../components/ScanTable";
import ThemeToggle from "../components/ThemeToggle";

export default function Dashboard(){
 return(
  <div className="layout">
    <Sidebar/>

    <main className="dashboard">
      <div className="topbar">
        <h2>Dashboard</h2>
        <ThemeToggle/>
      </div>

      <ScanTable/>
    </main>
  </div>
 );
}