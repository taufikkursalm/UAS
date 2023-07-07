import { useState } from "react";
import Data from "../../components/Data/Data";
import Hero from "../../components/Hero/Hero";
import Summary from "../../components/Summary";
import ENDPOINTS from "../../utils/constants/endpoints";
import axios from "axios";
import { useEffect } from "react";

function Indonesia() {
  const [data, setPasien] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    ambilData();
  }, []);

  async function ambilData() {
    const response = await axios(`${ENDPOINTS.GLOBAL}/countries/indonesia`);
    const pasien = [
      {
        status: "Confirmed",
        jumlah: response.data.confirmed,
      },
      {
        status: "Deaths",
        jumlah: response.data.deaths,
      },
      {
        status: "Recovered",
        jumlah: response.data.recovered,
      },
    ];
    setPasien(pasien);
    setImage(`${ENDPOINTS.GLOBAL}/countries/indonesia/og`);
  }
  return (
    <>
      <Hero />
      <Data judul={"Indonesia"} data={data} />
      <Summary image={image} />
    </>
  );
}

export default Indonesia;
