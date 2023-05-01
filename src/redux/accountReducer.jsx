import {createSlice} from "@reduxjs/toolkit"
const accountSlice=createSlice(
    {
        name:"account",
        initialState:{
            email:"ghanamaahmed@gmail.com",
            password:"12345678",
            sex:"",
            speciality:"",
            firstName:"",
            lastName:"",
        },
        reducers:{
            setAcount(state,{payload}){
                state.email=payload.email
                state.password=payload.password
                state.sex=payload.sex
                state.speciality=payload.speciality
                state.firstName=payload.firstName
                state.lastName=payload.lastName
            }
        }
    }
)
export const {setAcount}=accountSlice.actions
export default accountSlice.reducer