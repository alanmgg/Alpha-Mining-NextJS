import React, { useEffect, useState } from "react";
import DescribeData from "./describeData";
import CandleData from "./candleData";
// Google Chart
import { Chart } from "react-google-charts";

var objectDataOpen = [];
var objectDataHigh = [];
var objectDataLow = [];
var objectDataClose = [];
var objectDataVolume = [];

export default function ValuesOutliners(props) {
  const [valuesOutlinersOpen, setValuesOutlinersOpen] = useState(null);
  const [valuesOutlinersHigh, setValuesOutlinersHigh] = useState(null);
  const [valuesOutlinersLow, setValuesOutlinersLow] = useState(null);
  const [valuesOutlinersClose, setValuesOutlinersClose] = useState(null);
  const [valuesOutlinersVolume, setValuesOutlinersVolume] = useState(null);

  const [mainData, setMainData] = useState(null);

  useEffect(() => {
    setValuesOutlinersOpen(null);
    setValuesOutlinersHigh(null);
    setValuesOutlinersLow(null);
    setValuesOutlinersClose(null);
    setValuesOutlinersVolume(null);

    if (props.var !== undefined) {
      console.log(props.symbol);

      setMainData(props.var);
      objectDataOpen = [];
      objectDataOpen.push(["Open", "Value"]);
      objectDataHigh = [];
      objectDataHigh.push(["High", "Value"]);
      objectDataLow = [];
      objectDataLow.push(["Low", "Value"]);
      objectDataClose = [];
      objectDataClose.push(["Close", "Value"]);
      objectDataVolume = [];
      objectDataVolume.push(["Volume", "Value"]);

      for (const item in props.var) {
        objectDataOpen.push([item, props.var[item]["1. open"]]);
        objectDataHigh.push([item, props.var[item]["2. high"]]);
        objectDataLow.push([item, props.var[item]["3. low"]]);
        objectDataClose.push([item, props.var[item]["4. close"]]);
        objectDataVolume.push([item, props.var[item]["5. volume"]]);
      }
      setValuesOutlinersOpen(objectDataOpen);
      setValuesOutlinersHigh(objectDataHigh);
      setValuesOutlinersLow(objectDataLow);
      setValuesOutlinersClose(objectDataClose);
      setValuesOutlinersVolume(objectDataVolume);

      props.methodCharge();
    }
  }, [props]);

  const optionsOpen = {
    title: "Open",
    legend: { position: "none" },
    colors: ["#22C597"],
    chartArea: { width: 321 },
    bar: { gap: 0 }
  };

  const optionsHigh = {
    title: "High",
    legend: { position: "none" },
    colors: ["#22C597"],
    chartArea: { width: 321 },
    bar: { gap: 0 }
  };

  const optionsLow = {
    title: "Low",
    legend: { position: "none" },
    colors: ["#22C597"],
    chartArea: { width: 321 },
    bar: { gap: 0 }
  };

  const optionsClose = {
    title: "Close",
    legend: { position: "none" },
    colors: ["#22C597"],
    chartArea: { width: 321 },
    bar: { gap: 0 }
  };

  const optionsVolume = {
    title: "Volume",
    legend: { position: "none" },
    colors: ["#22C597"],
    bar: { gap: 0 }
  };

  return (
    <div className="grid pt-5">
      <div className="col-12">
        <div className="card">
          <h5>Paso 3: Detección de valores atípicos.</h5>
          <p style={{ fontWeight: "bold" }}>
            1) Distribución de variables numéricas.
          </p>
          <p>
            Se pueden utilizar gráficos para tener una idea general de las
            distribuciones de los datos, y se sacan estadísticas para resumir
            los datos. Estas dos estrategias son recomendables y se
            complementan.
          </p>
          {valuesOutlinersOpen !== null && valuesOutlinersHigh !== null ? (
            <div className="grid">
              <div className="col-6">
                <Chart
                  chartType="Histogram"
                  width="100%"
                  height="400px"
                  data={valuesOutlinersOpen}
                  options={optionsOpen}
                />
              </div>
              <div className="col-6">
                <Chart
                  chartType="Histogram"
                  width="100%"
                  height="400px"
                  data={valuesOutlinersHigh}
                  options={optionsHigh}
                />
              </div>
            </div>
          ) : null}

          {valuesOutlinersLow !== null && valuesOutlinersClose !== null ? (
            <div className="grid">
              <div className="col-6">
                <Chart
                  chartType="Histogram"
                  width="100%"
                  height="400px"
                  data={valuesOutlinersLow}
                  options={optionsLow}
                />
              </div>
              <div className="col-6">
                <Chart
                  chartType="Histogram"
                  width="100%"
                  height="400px"
                  data={valuesOutlinersClose}
                  options={optionsClose}
                />
              </div>
            </div>
          ) : null}

          {valuesOutlinersVolume !== null ? (
            <Chart
              chartType="Histogram"
              width="100%"
              height="100%"
              data={valuesOutlinersVolume}
              options={optionsVolume}
            />
          ) : null}

          <p className="pt-3">
            En el histograma se observa que Volume tiene valores sesgados a la
            izquierda.
          </p>

          {/* <DescribeData value={symbol} /> */}
          <CandleData var={mainData} />
        </div>
      </div>
    </div>
  );
}