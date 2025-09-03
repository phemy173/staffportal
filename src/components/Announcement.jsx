import React from "react";
function Announcement() {
    return (
      <section class="container pt-3 pb-2">
  <h2 className="text-danger">Updates from IT Desk</h2>
  <hr class="border-2"/>
       <div className="" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
  <div style={{ backgroundColor: "#fff", padding: "15px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
    <h3>IT Training Programme</h3>
    <p>IT kicks off the event with a football match at Field A on 29th October, 4:30 PM.</p>
    <a href="#" class="btn btn-primary">Read More...</a>
  </div>

  <div style={{ backgroundColor: "#fff", padding: "15px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
    <h3>IT Enforces 2FA</h3>
    <p>The IT Department has passed information across to all memeber of staff...</p>
    <a href="#" class="btn btn-primary">Read More...</a>
  </div>

  <div style={{ backgroundColor: "#fff", padding: "15px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
    <h3>IT System Upgrade</h3>
    <p>Server maintenance scheduled for Sunday — MIS may be temporarily unavailable.</p>
    <a href="#" class="btn btn-primary">Read More...</a>
  </div>
</div>
</section>


    )
}
export default Announcement;