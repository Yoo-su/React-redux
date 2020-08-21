import {createStore} from 'redux';
import {createAction,createReducer, configureStore, createSlice} from "@reduxjs/toolkit";

/* const addToDo=createAction("ADD");
const deleteToDo=createAction("DELETE"); 

const reducer=createReducer([],{
    [addToDo]:(state,action)=>{state.push({text:action.payload,id:Date.now()})},
    [deleteToDo]:(state,action)=>{return state.filter(toDo=>toDo.id!==action.payload)}

}); */

//결과적으로 아래와 같이 createSlice를 쓰는 것이 최선의 방법
const toDos=createSlice({
   name:"toDoReducer" ,
   initialState:[],
   reducers:{
    add:(state,action)=>{state.push({text:action.payload,id:Date.now()})},
    remove:(state,action)=>{return state.filter(toDo=>toDo.id!==action.payload)}

   }
})

const store=configureStore({reducer:toDos.reducer});

export const {add,remove}=toDos.actions;

export default store;
