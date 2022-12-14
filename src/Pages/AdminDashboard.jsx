import React from "react";
import Sorting from "../Components/Sorting";
import "../CSS/admin.css";
function AdminDashboard() {
  return (
    //display sales status on daily, weekly and monthly bases
    <>
      <div id="admin_display">
        <div>
          <h3>Sold 2 products today</h3>
        </div>
        <div>
          <h3>Sold 15 products this week</h3>
        </div>
        <div>
          <h3>Sold 150 products this month</h3>
        </div>
      </div>
      <Sorting />
    </>
  );
}

export default AdminDashboard;
