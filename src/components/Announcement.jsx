import React from "react";
function Announcement() {
    return (
       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
  <div style={{ backgroundColor: "#fff", padding: "15px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
    <h3>Inset Training Programme</h3>
    <p>HR kicks off the event with a football match at Field A on 29th October, 4:30 PM.</p>
  </div>

  <div style={{ backgroundColor: "#fff", padding: "15px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
    <h3>Staff Welfare Update</h3>
    <p>New health benefits will be shared in the upcoming HR session.</p>
  </div>

  <div style={{ backgroundColor: "#fff", padding: "15px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
    <h3>IT System Upgrade</h3>
    <p>Server maintenance scheduled for Sunday — MIS may be temporarily unavailable.</p>
  </div>
</div>


    )
}
export default Announcement;