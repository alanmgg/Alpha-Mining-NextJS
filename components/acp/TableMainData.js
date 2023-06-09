import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Spinner from "./../utilities/Spinner";

var objectData = [];

export default function TableMainData(props) {
  const [mainData, setMainData] = useState(null);

  useEffect(() => {
    if (props.var !== null) {
      objectData = [];

      for (const item in props.var.main_data) {
        var date = props.var.main_data[item]["Date"].split("T");
        objectData.push({
          date: date[0],
          open: props.var.main_data[item]["Open"].toFixed(4),
          high: props.var.main_data[item]["High"].toFixed(4),
          low: props.var.main_data[item]["Low"].toFixed(4),
          close: props.var.main_data[item]["Close"].toFixed(4),
          volume: props.var.main_data[item]["Volume"],
          dividends: props.var.main_data[item]["Dividends"],
          stockSplits: props.var.main_data[item]["Stock Splits"]
        });
      }
      setMainData(objectData);
    }
  }, [props]);

  return (
    <div className="grid pt-5">
      {mainData !== null ? (
        <div className="col-12 xl:col-12">
          <DataTable
            value={mainData}
            rows={5}
            paginator
            responsiveLayout="scroll"
          >
            <Column
              field="date"
              header="Fecha"
              style={{ width: "20%", fontSize: 12 }}
            />
            <Column
              field="open"
              header="Open"
              style={{ width: "15%", fontSize: 12 }}
            />
            <Column
              field="high"
              header="High"
              style={{ width: "15%", fontSize: 12 }}
            />
            <Column
              field="low"
              header="Low"
              style={{ width: "15%", fontSize: 12 }}
            />
            <Column
              field="close"
              header="Close"
              style={{ width: "15%", fontSize: 12 }}
            />
            <Column
              field="volume"
              header="Volume"
              style={{ width: "25%", fontSize: 12 }}
            />
            <Column
              field="dividends"
              header="Dividends"
              style={{ width: "10%", fontSize: 12 }}
            />
            <Column
              field="stockSplits"
              header="Stock Splits"
              style={{ width: "10%", fontSize: 12 }}
            />
          </DataTable>

          <h6>Descripción.</h6>
          <ul>
            <li>
              En el comercio de acciones, <strong>High</strong> y{" "}
              <strong>Low</strong> se refieren a los precios máximos y mínimos
              en un período determinado.
            </li>
            <li>
              <strong>Open</strong> y <strong>Close</strong> son los precios en
              los que una acción comenzó y terminó cotizando en el mismo
              período.
            </li>
            <li>
              <strong>Volume</strong> es la cantidad total de la actividad
              comercial.
            </li>
            <li>
              Los valores ajustados tienen en cuenta las acciones corporativas,
              como los <strong>Dividends</strong>, los{" "}
              <strong>Stock Splits</strong> y la emisión de nuevas acciones.
            </li>
          </ul>
        </div>
      ) : (
        <div className="col-12 xl:col-12">
          <Spinner layout="small" />
        </div>
      )}
    </div>
  );
}
