import { scans } from "../data/scans";
import { useNavigate } from "react-router-dom";

export default function ScanTable() {
  const navigate = useNavigate();

  return (
    <table className="scan-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
          <th>Progress</th>
          <th>Last</th>
        </tr>
      </thead>

      <tbody>
        {scans.map(s => (
          <tr key={s.id}
            onClick={() => navigate(`/scan/${s.id}`)}>
            <td>{s.name}</td>
            <td>{s.type}</td>
            <td className={s.status==="Completed"?"ok":"fail"}>
              {s.status}
            </td>

            <td>
              <div className="progress">
                <div style={{width:s.progress+"%"}}/>
              </div>
            </td>

            <td>{s.last}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}