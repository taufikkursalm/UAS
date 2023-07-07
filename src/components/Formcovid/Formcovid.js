/**
 * Import CSS Module Form Covid-19.
 * Untuk kemudian disimpan di dalam object styles Formcovid.module.css
 * Kita juga harus mengimport Assets yang berisi logo untuk form covid agar lebih cantik
 * Tidak lupa pula kita harus mengimport react dan import useState
 */
import styles from "./Formcovid.module.css";
import Assets from "../Assets/img/logoo.png";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProvinsiByNama,
  updateExistingProvinsi,
  getAllProvinsi,
} from "../../features/provinsiSlice";

function Formcovid() {
  const provinces = useSelector(getAllProvinsi);

  const dispatch = useDispatch();

  const [provinsi, setProvinsi] = useState("Jakarta");

  const currentProvinsi = useSelector((state) =>
    getProvinsiByNama(state, provinsi)
  );

  const [state, setState] = useState(currentProvinsi);

  const [status, setStatus] = useState("kasus");

  const [jumlah, setJumlah] = useState(0);

  const handleProvinsi = (e) => {
    setProvinsi(e.target.value);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleJumlah = (e) => {
    setJumlah(e.target.value);
    setState({ ...state, kota: provinsi, [status]: jumlah });
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateExistingProvinsi(state));
  };

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__right}>
          <img
            className={styles.form__image}
            src={Assets}
            alt="ConceptualIdea"
          />
        </div>
        <div className={styles.form__left}>
          <h2 id="about" className={styles.form__notes}>
            Form Covid
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Form Input Provinsi di Indonesia */}
            <div className={styles.form__column}>
              <label htmlFor="provinsi" className={styles.form__label}>
                Provinsi
              </label>
              <select
                className={styles.form__input}
                value={provinsi}
                onChange={handleProvinsi}
              >
                {provinces.map((provinsi) => (
                  <option key={provinsi.kota} value={provinsi.kota}>
                    {provinsi.kota}
                  </option>
                ))}
              </select>
            </div>

            {/* Form Input Status Pasien Covid-19 yang terdapat di Indonesia*/}
            <div className={styles.form__column}>
              <label htmlFor="status" className={styles.form__label}>
                Status
              </label>
              <select
                className={styles.form__input}
                id="status"
                value={status}
                onChange={handleStatus}
              >
                <option value="kasus">Positif</option>
                <option value="sembuh">Sembuh</option>
                <option value="dirawat">Dirawat</option>
                <option value="meninggal">Meninggal</option>
              </select>
            </div>

            {/* Form Input Jumlah Pasien Covid-19 di Indonesia */}
            <div className={styles.form__column}>
              <label className={styles.form__label}>Jumlah</label>
              <input
                className={styles.form__input}
                onChange={handleJumlah}
                value={jumlah}
              />
            </div>

            {/* Button submit dengan onChange */}
            <div>
              <button className={styles.form__btn} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Formcovid;
