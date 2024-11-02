import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState:{
        value:[]
    },
    reducers:{
        AddToDo(state,action){
            state.value.push(action.payload);
        },
        RemoveToDo(state,action){
//            state.value.splice(state.value.indexOf(action.payload),1);
            state.value.splice(action.payload,1);
        },
        EditToDo(state,action){
            //{index:1,task: "To do name"}
            state.value.splice(action.payload['index'],1,action.payload['task']);
        },

    }

})

export const {AddToDo,RemoveToDo,EditToDo} = todoSlice.actions;
export default todoSlice.reducer