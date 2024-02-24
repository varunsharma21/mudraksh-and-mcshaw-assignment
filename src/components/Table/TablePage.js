import React from "react";
import NavBar from "../NavigationBar/NavBar";
import InfoTable from "./Table";
import styles from "./TablePage.module.css";

function TablePage() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.table}>
        <InfoTable />
      </div>
    </div>
  );
}

export default TablePage;
