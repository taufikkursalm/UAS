/**
 * Import DataCard.
 * Untuk kemudian disimpan di dalam object styles Global.styled.js
 */
import DataCard from "../DataCard/DataCard";
import styles from "./Data.module.css";
import React from "react";

function Global(props) {
  const { data } = props;
  /**
   * Menggunakan styles css yang sudah diimport.
   * Dan memanggilnya menggunakan expression model.
   */
  return (
    <div className={styles.container}>
      <div className={styles.global}>
        <div>
          <h1 id="global" className={styles.global__brand}>
            {props.judul}
          </h1>
          <h3 className={styles.global__title}>Data Covid Berdasarkan Global</h3>
        </div>
        <div className={styles.global__card}>
          {data.map(function (data) {
            return <DataCard key={data.status} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Global;
