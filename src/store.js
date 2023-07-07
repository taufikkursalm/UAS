import { configureStore } from '@reduxjs/toolkit'

import provinsiReducer from './features/provinsiSlice'

export default configureStore({
  reducer: {
    provinsi: provinsiReducer
  }
});