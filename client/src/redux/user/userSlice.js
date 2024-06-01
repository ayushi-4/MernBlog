import { createSlice } from "@reduxjs/toolkit";
// import SignIn from "../../pages/Signin";

const initialState = {
    currentUser: null ,
    error: null,
    loading : false
}

const userSlice = createSlice({
    name: 'user' ,
    initialState ,
    reducers:{
        SignInStart :(state) =>{
            state.loading= true ;
            state.error= null;
        },
        SignInSuccess: (state , action) =>{
            state.currentUser=action.payload;
            state.loading=false;
            state.error =null;
        },
        SignInFailure: (state , action) =>{
            state.loading=false;
            state.error =action.payload;
        },
        updateStart: (state) =>{
            state.loading = true ;
            state.error = null;
        } ,
        updateSuccess: (state , action) =>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateFailure: (state , action ) =>{
            state.loading = true ;
            state.error = action.payload;
        },
        deleteUserStart:(state) =>{
            state.loading = true;
            state.error = null;
        },
        deleteUserSuccess:(state , action) =>{
            state.currentUser=null;
            state.loading = false;
            state.error = null;
        },
        deleteUserFailure:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        },

    }
});

export const { SignInStart , SignInFailure , SignInSuccess ,  updateStart , updateSuccess, updateFailure 
    ,deleteUserStart , deleteUserFailure , deleteUserSuccess
} = userSlice.actions;
export default userSlice.reducer;