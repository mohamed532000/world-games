import { createSlice } from "@reduxjs/toolkit";


let UserAuthWorker = createSlice({
    name : "auth",
    initialState : [],
    reducers : {
        login : (state , action) =>{
            // let productWasAdd = state.find((produc) => produc.id === action.payload.id);
            state.push({user: action?.payload});
        },
        deleteProduct : (state , action)=>{
            return state.filter(produc => {
                return produc.id !== action.payload.id
            });
        }
    }
});
export let {login , logout} = UserAuthWorker.actions;
export default UserAuthWorker.reducer;