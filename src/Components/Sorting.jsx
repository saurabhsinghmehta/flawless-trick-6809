import React from "react";

function Sorting() {
  return(
    <div style={{width:"300px",border:"1px solid red",marginTop:"10%"}}>
      <h1>Sorting</h1>
      <div>
        <div>
          <input type="checkbox" />
          <label htmlFor="">Sort by Category</label>
        </div>
        <div>
          <input type="checkbox"  />
          <label htmlFor="">Sort by Price</label>
        </div>
      </div>
    </div>
  )
}

export default Sorting;
