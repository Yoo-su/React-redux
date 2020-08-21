import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import {add} from '../store';
import ToDo from "../components/ToDo";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home({toDos,addToDo}){
    const [text,setText]=useState("");
    function onChange(e){
        setText(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        addToDo(text);
        setText("");
    }
    return (
     <div style={{margin:"20px"}}>
         <h1>To Do</h1>
         <form onSubmit={onSubmit}>
           <input type="text" value={text} onChange={onChange}></input>&nbsp;
           <Button onClick={onSubmit}>ADD</Button>
         </form> 
         <ul>
           {toDos.map(toDo=>
             <ToDo key={toDo.id} {...toDo}></ToDo>
           )}
         </ul>
     </div>
    );
}

function mapStateToProps(state){
  return {toDos:state}; //return값을 이 컴포넌트에 props로 전달
}

function mapDispatchToProps(dispatch){
  return {
    addToDo:(text)=>dispatch(add(text))
  }
}

/*connect의 파라미터로 getCur..함수를 줘서 이 함수를 통해
store의 state에 접근할 수 있도록 해준 것. 즉 connect는
store가 연결해주는 중매자*/
export default connect(mapStateToProps,mapDispatchToProps) (Home);