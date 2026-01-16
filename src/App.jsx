// import { useState } from 'react'
import React from "react";
import { Line } from "react-chartjs-2";
import './chartConfig';

const App = () => {

// グラフデータを定義
const data = {
  labels: ["1月", "2月", "3月"], // X軸
  datasets: [
    {
      label: "売上", // 凡例
      data: [100, 2, 300], // Y軸の値
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
      tension: 0.3, // 線のカーブ
    },
  ],
};

// オプション設定の定義
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '月別売上推移',
      },
    },
};

  return (
    <>
    <Line options={options} data={data}/>
    <Line options={options} data={data}/>
      a
    </>
  );
};
export default App;

