import { useNavigate } from "react-router-dom";

export default function Auth(){
 const nav=useNavigate();

 return(
  <div className="auth">
    <div className="auth-left">
      <h1>aps</h1>
      <h2>Expert level Cybersecurity in hours not weeks.</h2>
    </div>

    <div className="auth-right">
      <div className="auth-card">
        <h3>Sign up</h3>
        <input placeholder="First name"/>
        <input placeholder="Last name"/>
        <input placeholder="Email"/>
        <input placeholder="Password" type="password"/>

        <button onClick={()=>nav("/dashboard")}>
          Create account
        </button>
      </div>
    </div>
  </div>
 );
}