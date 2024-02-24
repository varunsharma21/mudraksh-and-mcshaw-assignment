import React, { useState } from "react";
import NavBar from "../NavigationBar/NavBar";
import Chart from "./Chart";
import styles from "./ChartPage.module.css";

function ChartPage() {
  const [validData, setValidData] = useState(false);

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.chart}>
        <Chart />
      </div>
    </div>
  );
}

export default ChartPage;
