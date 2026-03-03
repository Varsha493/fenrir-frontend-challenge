export default function ScanProgress(){
 return(
  <div className="scan-progress">
    <div className="circle">0%</div>

    <div className="steps">
      <span className="active">Spidering</span>
      <span>Mapping</span>
      <span>Testing</span>
      <span>Validating</span>
      <span>Reporting</span>
    </div>
  </div>
 );
}