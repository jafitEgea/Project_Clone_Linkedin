import { createSlice } from '@reduxjs/toolkit'

const useSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, actions) => {
        state.user = actions.payload
    },
    logout: (state) => {
        state.user = null
    }
  }
});

export const {login, logout} = useSlice.actions
export const selectUser = state => state.user.user
export default useSlice.reducer