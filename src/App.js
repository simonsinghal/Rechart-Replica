import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BarChart from "./Components/BarChart";
import LineChart from "./Components/LineChart";
import PieChart from "./Components/PieChart";
import RolesBarChart from "./Components/RolesBarChart";
import LoginsBarChart from "./Components/LoginsBarChart";

export default function Home() {
  return (
    <main className="main-container container-fluid">
      <div className="row">
        <div className="col-12">
          <h2
            className="text-center my-2"
            style={{
              height: "85px",
              border: "2px solid #e0ca02",
              backgroundColor: "#505050",
              color: "#ffe600",
              paddingTop: "20px",
              borderRadius: "45px",
            }}
          >
            User Summary
          </h2>
        </div>
      </div>

      <div className="row">
        {/* Total Users */}
        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
          <div className="card p-1" style={{ height: "270px" }}>
            <h6 className="text-center" style={{ color: "#ffe600",height:"60px",backgroundColor:"black" }}>
              Total Users
            </h6>
            <PieChart />
          </div>
        </div>

        {/* Clients onboarding Yearly/Monthly */}
        <div className="col-lg-3 col-md-6 col-sm-12 mb-2 pt-20">
          <div className="card p-1" style={{ height: "270px" }}>
            <h6 className="text-center" style={{ color: "#ffe600", height:"70px",width:"100%",backgroundColor:"black" }}>
              Clients Onboarding Yearly/Monthly
            </h6>
            <BarChart />
          </div>
        </div>

        {/* Month on Month Users Onboarded */}
        <div className="col-lg-6 col-md-12 mb-2">
          <div className="card p-1" style={{ height: "270px" }}>
            <h6 className="text-center" style={{ color: "#ffe600", height:"60px",backgroundColor:"black" }}>
              Month on Month Users Onboarded
            </h6>
            <LineChart />
          </div>
        </div>
      </div>

      <div className="row">
        {/* Total Users By Roles */}
        <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
          <div className="card p-1" style={{ height: "335px" }}>
            <h6 className="text-center" style={{ color: "#ffe600", height:"30px",backgroundColor:"black",marginTop:"0px", padding:"0 0px" }}>
              Total Users By Roles
            </h6>
            <RolesBarChart />
          </div>
        </div>

        {/* Month On Month Login Count */}
        <div className="col-lg-6 col-md-12 mb-2">
          <div className="card p-1" style={{ height: "335px" }}>
            <h6 className="text-center" style={{ color: "#ffe600", height:"90px",backgroundColor:"black" }}>
              Month On Month Login Count
            </h6>
            <LoginsBarChart />
          </div>
        </div>
      </div>
    </main>
  );
}
