/**
 * Import CSS Module Provinsi di Indonesia yang terdampak wabah Covid-19.
 * Untuk kemudian disimpan di dalam object styles Provinsi.module.css
 * Kita juga harus mengimport Assets yang berisi logo untuk form covid agar lebih cantik
 * Tidak lupa pula kita harus mengimport react dan import useState
 */
import styles from "./Provinsi.module.css";
import React from "react";
import { useSelector } from "react-redux";
import { getAllProvinsi } from "../../features/provinsiSlice";

function Provinsi() {
  const provinces = useSelector(getAllProvinsi);

  return (
    <div className={styles.container}>
      <div className={styles.provinsi}>
        <div>
          <div className={styles.provinsi__titlegroup}>
            <h1 id="provinsi" className={styles.provinsi__brand}>
              Provinsi
            </h1>
            <h3 className={styles.provinsi__title}>
              Data Covid Berdasarkan Provinsi
            </h3>
          </div>
          <div className={styles.provinsi__tablegroup}>
            <table className={styles.provinsi__table}>
              <thead>
                <tr className={styles.provinsi__tr}>
                  <th className={styles.provinsi__th}>No.</th>
                  <th className={styles.provinsi__th}>Provinsi</th>
                  <th className={styles.provinsi__th}>Positif</th>
                  <th className={styles.provinsi__th}>Sembuh</th>
                  <th className={styles.provinsi__th}>Dirawat</th>
                  <th className={styles.provinsi__th}>Meninggal</th>
                </tr>
              </thead>
              <tbody>
                {provinces.map((data, index) => {
                  return (
                    <tr className={styles.provinsi__tr} key={index}>
                      <td className={styles.provinsi__td}>{data.index}</td>
                      <td className={styles.provinsi__td}>{data.kota}</td>
                      <td className={styles.provinsi__td}>{data.kasus}</td>
                      <td className={styles.provinsi__td}>{data.sembuh}</td>
                      <td className={styles.provinsi__td}>{data.dirawat}</td>
                      <td className={styles.provinsi__td}>{data.meninggal}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Provinsi;
