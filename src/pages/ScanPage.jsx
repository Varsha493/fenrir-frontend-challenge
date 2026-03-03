import Sidebar from "../components/Sidebar";
import ScanProgress from "../components/scan/ScanProgress";
import LiveConsole from "../components/scan/LiveConsole";
import ThemeToggle from "../components/ThemeToggle";

export default function ScanPage(){
 return(
  <div className="layout">
    <Sidebar/>

    <main className="dashboard">
      <div className="topbar">
        <h2>Scan Details</h2>
        <ThemeToggle/>
      </div>

      <ScanProgress/>
      <LiveConsole/>
    </main>
  </div>
 );
}