import { createSlice } from '@reduxjs/toolkit'


const addRewardSlice = createSlice({
    name: "addRewardSlice",
    initialState: {
        Data_customer_state: [],
        Data_group_state: [],
        SponAmt_state:"",
        CustReward_state:"",
        StartDate_state:"",
        EndDate_state:""
    },
    reducers: {
        Data_customer_red: (state, action) => {
            state.Data_customer_state = action.payload
            console.log("aray addes")
        },
        Data_group_red: (state, action) => {
            state.Data_group_state = action.payload
            console.log("aray addes")
        },
        SponAmt_red: (state, action) => {
            state.SponAmt_state = action.payload
            console.log("aray addes")
        },
        CustReward_red: (state, action) => {
            state.CustReward_state = action.payload
            console.log("aray addes")
        },
        StartDate_red: (state, action) => {
            state.StartDate_state = action.payload
            console.log("aray addes")
        },
        EndDate_red: (state, action) => {
            state.EndDate_state = action.payload
            console.log("aray addes")
        }
    
    }
})

export const addRewardSlice_data = (state) => state

export const { Data_customer_red, Data_group_red, SponAmt_red, CustReward_red, StartDate_red, EndDate_red } = addRewardSlice.actions
export default addRewardSlice.reducer