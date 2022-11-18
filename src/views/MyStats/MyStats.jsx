import React, { useState } from "react";
import { PieChart } from "../../components/PieChart/PieChart";
import "./MyStats.css";
import MyStatsCard from "./MyStatsCard";

const MyStats = () => {
  const usuarioData = [
    {
      id: 1,
      name: "Apuestas Ganadas",
      qty: 10,
    },
    {
      id: 2,
      name: "Apuestas Perdidas",
      qty: 20,
    },
  ];
  const [userData, setUserData] = useState({
    labels: usuarioData.map((data) => data.name),
    datasets: [
      {
        data: usuarioData.map((data) => data.qty),
        backgroundColor: ["#6FCDCD", "#FF829D"],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });
  return (
    <>
      <div className="mystats__container">
        <div className="mystats__stats">
          <div className="mystats__title">Apuestas</div>
          <div className="mystats__cards">
            <MyStatsCard title={"Cantidad"} qnty={75} />
            <MyStatsCard title={"Ganadas"} qnty={25} />
            <MyStatsCard title={"Perdidas"} qnty={50} />
            <MyStatsCard title={"Puntos Acumulados"} qnty={50} />
          </div>
        </div>
        <div className="chart__container">
          <PieChart chartData={userData} />
        </div>
      </div>
    </>
  ); 
};

export default MyStats;
