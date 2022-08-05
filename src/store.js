import { configureStore } from '@reduxjs/toolkit'
import thingReducer from './slices/things'
const reducer = {
  things: thingReducer
}
const store = configureStore({
  reducer,
  devTools: true
})
export default store
