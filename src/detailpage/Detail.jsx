import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"
import { useHistory } from "react-router-dom";

const Detail = (props) => {
  const history = useHistory();
 const Params= useParams();
  const todo_list = useSelector((state) => state.reducer.todos);
  const todo_index = Params.id;
  console.log(todo_list[ todo_index])
  

  // console.log(todo);
  // console.log (todo[id.id])
    return (
       <div>
        <Card  className="card">
        <Card  className="card-body">
        <button type="button" className="btn-close " style={{float:"right"}} aria-label="Close"
         onClick={() => {
          history.goBack();
        }}
        ></button>
          <Text>
            <h2 className="card-title">{todo_list[todo_index].title}</h2>
            <p className="card-text">{todo_list[todo_index].body}</p>
          </Text>
        </Card >
      </Card >
      
      </div>
    )
}


const Card = styled.div`
position:absolute;
top:50%; left:50%;
transform: translate(-50%, -50%);
width:500px;
height:500px;

`;

const Text = styled.div`
text-align : center;
padding:100px 0;

`;


export default Detail;