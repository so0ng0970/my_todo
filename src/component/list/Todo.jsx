// Todo.jsx  

import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux"
import {deleteTodolist,toggleTodolist} from"../redux/moduls/todolist"
import styled from "styled-components";



function Todo({ todo}) {
  const history = useHistory();
  const dispatch = useDispatch();

  const { id, title, body } = todo;

  const onClickDelete = ()=>{
    dispatch(deleteTodolist(id))

};

const onClickToggle = () =>{
  dispatch(toggleTodolist(id))
}


  return (
    <Div  className="todo-container">
      <div>
      
      <div align="right">
           <Button 
          type="button"
          className="btn btn-link"
          style={{color:"#8c8c8c"}}

          onClick={() => {
            history.push("/detail/"+id);
          }}
        >
         <div> 상세📄</div>
        </Button >
      </div>
      <div>
        <h2 className="todo-title">{title}</h2>
        <h4>{body}</h4>
      </div>

      <Set className="button-set">
        < button
          className="btn btn-outline-danger "
          onClick={() => onClickDelete (id)}
        >
          삭제하기
        </ button>
        < button
          className="btn btn-outline-success"
          onClick={() => onClickToggle (todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </  button >
      </Set >
      
      </div>
    </Div >
  );
}

const Div = styled.div`

width: 270px;
/* height: 150px; */
border: 4px solid teal;
border-radius: 12px;
padding: 12px 24px 24px 24px;

`;

const Set = styled.div`

display: flex;
gap: 10px;
margin-top: 24px;
text:center
`;


const Button = styled.button`
mardin:auto;
border:none;
width: 50%;
height: 40px;
border-radius: 8px;
cursor: pointer;
`;



export default Todo;
