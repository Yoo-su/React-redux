import React from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux'; 
import {remove} from '../store';
import { Link } from 'react-router-dom';


function ToDo({text,id,onBtnClick}){
    return(
        <li>
          <Link to={{
            pathname:`/${id}`
          }}>
          {text}</Link><Button variant="danger" onClick={onBtnClick}>DEL</Button>
        </li>
    );
}

const mapDispatchToProps=(dispatch,ownProps)=>{
   return {
     onBtnClick:()=>dispatch(remove(ownProps.id))
   }
}

export default connect(null,mapDispatchToProps) (ToDo);

/* ToDo 컴포넌트는 하나의 li이다. mapDispatchToProps함수는 어떤 action에 대해
dispatch를 하는 함수를 이 ToDo컴포넌트에 props로 전달해주는 함수이다. 여기서 ownProps는
이 컴포넌트가 받은 props값이다.
 */ 