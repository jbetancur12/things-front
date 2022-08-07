import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ThingService from '../services/things.service'
const initialState = []

export const createThing = createAsyncThunk(
  'things/create',
  async ({ name, mac }) => {
    const res = await ThingService.createThing({ name, mac })
    return res.data.data
  }
)

export const updateThing = createAsyncThunk(
  'things/update',
  async ({ id, body }) => {
    const res = await ThingService.updateThing(id, body)
    return res.data
  }
)

export const retrieveThings = createAsyncThunk('things/retrieve', async () => {
  const res = await ThingService.getThings()
  return res.data
})

export const deleteThing = createAsyncThunk('things/delete', async ({ id }) => {
  const res = await ThingService.deleteThing(id)
  return res.data
})

const thingSlice = createSlice({
  name: 'thing',
  initialState,
  extraReducers: {
    [createThing.fulfilled]: (state, action) => {
      state.push(action.payload)
    },

    [retrieveThings.fulfilled]: (state, action) => {
      return [...action.payload]
    },
    [retrieveThings.rejected]: (state, action) => {
      console.log(action)
    },
    [updateThing.fulfilled]: (state, action) => {
      const index = state.findIndex((thing) => thing._id === action.payload._id)
      state[index] = {
        ...state[index],
        ...action.payload
      }
    },
    [deleteThing.fulfilled]: (state, action) => {
      const index = state.findIndex(({ id }) => id === action.payload._id)
      state.splice(index, 1)
    }
  }
})

const { reducer } = thingSlice
export default reducer
