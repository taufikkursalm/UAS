import { createSlice } from "@reduxjs/toolkit";
import dataProvinsi from "../utils/constants/provinces";

const initialState = {
  data: dataProvinsi.provinces,
};

const provinsiSlice = createSlice({
  name: "provinsi",
  initialState,
  reducers: {
    updateExistingProvinsi: (state, action) => {
      const { kota, kasus, sembuh, meninggal, dirawat } = action.payload;
      const existingNote = state.data.find((note) => note.kota === kota);
      if (existingNote) {
        existingNote.kasus = kasus;
        existingNote.sembuh = sembuh;
        existingNote.meninggal = meninggal;
        existingNote.dirawat = dirawat;
      }
    },
  },
});

export const getAllProvinsi = (state) => state.provinsi.data;
export const getProvinsiByNama = (state, provinsiKota) =>
  state.provinsi.data.find((provinsi) => provinsi.kota === provinsiKota);

export const { updateExistingProvinsi } = provinsiSlice.actions;

export default provinsiSlice.reducer;
