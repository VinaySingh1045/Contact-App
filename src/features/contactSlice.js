import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: "conatct",
    initialState: {
        allCompany: [],
    },
    reducers: {
        setAllCompany: (state, action) => {
            state.allCompany = action.payload
        },
    }
})

export const { setAllCompany } = contactSlice.actions;
export default contactSlice.reducer;