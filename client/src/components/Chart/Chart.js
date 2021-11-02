import React from "react";
import "./Chart.css";

import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";

const Chart = ({ handleChartOt, formatData, usinaData, chartOpt }) => {
  //Custom tool tip for the chart, showing data according to the option selected
  function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">Hora: {formatData(label)}</p>
          <p className="payload">Valor: {`${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  }

  return (
    <div>
      <div className="chart">
        <ResponsiveContainer width="100%" height={500}>
          <AreaChart data={usinaData}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4}></stop>
                <stop
                  offset="75%"
                  stopColor="#2451B7"
                  stopOpacity={0.05}
                ></stop>
              </linearGradient>
            </defs>
            <Area dataKey={chartOpt} stroke="#2451B7" fill="url(#color)"></Area>
            <XAxis
              dataKey="tempo_h"
              tickFormatter={(n) => formatData(n)}
            ></XAxis>
            <YAxis dataKey={chartOpt}></YAxis>
            <Tooltip content={<CustomTooltip />}></Tooltip>
            <CartesianGrid opacity={0.5} vertical={false} />
          </AreaChart>
        </ResponsiveContainer>
        <div className="chart-options">
          <div>
            <button
              className={chartOpt === "tensao_V" ? "button active" : "button"}
              onClick={() => handleChartOt("tensao_V")}
            >
              Tensão
            </button>
            <button
              className={chartOpt === "corrente_A" ? "button active" : "button"}
              onClick={() => handleChartOt("corrente_A")}
            >
              Corrente
            </button>
            <button
              className={
                chartOpt === "potencia_kW" ? "button active" : "button"
              }
              onClick={() => handleChartOt("potencia_kW")}
            >
              Potência
            </button>
            <button
              className={
                chartOpt === "temperatura_C" ? "button active" : "button"
              }
              onClick={() => handleChartOt("temperatura_C")}
            >
              Temperatura
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
