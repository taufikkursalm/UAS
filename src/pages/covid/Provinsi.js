import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import data from "../../utils/constants/provinces";
import Provinsi from "../../components/Provinsi/Provinsi";
import Formcovid from "../../components/Formcovid/Formcovid";

function Provins() {
  const [provinces, setProvinces] = useState(data.provinces);

  return (
    <>
      <Hero />
      <Provinsi />
      <Formcovid provinces={provinces} setProvinces={setProvinces} />
    </>
  );
}

export default Provins;
