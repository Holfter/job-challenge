import React from "react";
import "./App.css";
import api from "./api";
import { useEffect, useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Crud from "./components/Crud/Crud";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import moment from "moment";

function App() {
  //Data from the factory and option for the chart
  const [usinaData, setUsinaData] = useState([]);
  const [chartOpt, setChartOpt] = useState("tensao_V");
  const [price, setPrice] = useState(0);
  const [average, setAverage] = useState(0);

  //Format the hour without changing its value
  const formatData = React.useCallback((n) => {
    const hour = precise_round(n, 2);
    const minutes = (hour % 1) * 60;
    return `${parseInt(hour)}:${parseInt(minutes)}`;
  }, []);

  //Get all data from the factory and set the state
  useEffect(() => {
    function getDiff(data) {
      const d1 = moment(
        `${formatData(precise_round(data[0].tempo_h, 2))}:00 am`,
        "HH:mm:ss a"
      );
      const d2 = moment(
        `${formatData(precise_round(data.at(-1).tempo_h, 2))}:00 pm`,
        "HH:mm:ss a"
      );

      //KW Produzido no dia
      const list = data.map((item) => item.potencia_kW, this);
      const averageKW = list.reduce((a, b) => a + b, 0);

      const time = moment.duration(d2.diff(d1))._data;
      setAverage(averageKW / (time.minutes / 60 + time.hours));
      setPrice((averageKW / (time.minutes / 60 + time.hours)) * 0.95);
    }
    const getUsinaData = async () => {
      await api.get("/usina").then((res) => {
        setUsinaData(res.data.data);
        getDiff(res.data.data);
      });
    };

    getUsinaData();
  }, [formatData]);

  //Format the number to n decimal cases
  function precise_round(num, decimals) {
    var t = Math.pow(10, decimals);
    return (
      Math.round(
        num * t +
          (decimals > 0 ? 1 : 0) *
            (Math.sign(num) * (10 / Math.pow(100, decimals)))
      ) / t
    ).toFixed(decimals);
  }

  //Set chartOpt
  const handleChartOt = (opt) => {
    setChartOpt(opt);
  };

  return (
    <div className="App">
      <Router>
        <div className="side">
          <Sidebar />
        </div>
        <Route exact path="/dashboard">
          <div>
            <Dashboard
              average={average}
              price={price}
              handleChartOt={handleChartOt}
              formatData={formatData}
              usinaData={usinaData}
              chartOpt={chartOpt}
            />
          </div>
        </Route>
        <Route path="/clientes">
          <div>
            <Crud price={price}></Crud>
          </div>
        </Route>
      </Router>
    </div>
  );
}

export default App;
