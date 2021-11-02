import React from "react";
import Cards from "../MediaDoDia/Cards";
import Chart from "../Chart/Chart";
import Clientes from "../Clientes/Clientes";
import "./Dashboard.css";
const Dashboard = ({
  handleChartOt,
  formatData,
  usinaData,
  chartOpt,
  price,
  average,
}) => {
  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <h1>Dashboard</h1>
        <div className="kwPrice-card">
          <div>
            {average.toFixed(2)} <b>kWh</b>
          </div>
          <div>
            <b>R$</b> {price.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="ch">
        <div className="content">
          <div>
            <Cards data={usinaData} />
          </div>
          <div>
            {usinaData.length !== 0 && (
              <Chart
                handleChartOt={handleChartOt}
                formatData={formatData}
                usinaData={usinaData}
                chartOpt={chartOpt}
              />
            )}
          </div>
        </div>
      </div>
      <Clientes />
    </div>
  );
};

export default Dashboard;
