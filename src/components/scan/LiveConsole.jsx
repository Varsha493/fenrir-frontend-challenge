import {useEffect,useState} from "react";

export default function LiveConsole(){
 const [logs,setLogs]=useState("");

 useEffect(()=>{
  const lines=[
    "Starting scan...",
    "Scanning ports...",
    "Mapping endpoints...",
    "Testing vulnerabilities...",
    "Generating report..."
  ];

  let i=0;

  const t=setInterval(()=>{
    setLogs(p=>p+"\n"+lines[i]);
    i++;
    if(i===lines.length) clearInterval(t);
  },1000);

  return()=>clearInterval(t);
 },[]);

 return(
  <div className="console">
    <pre>{logs}</pre>
  </div>
 );
}