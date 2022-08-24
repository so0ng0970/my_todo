import React, { useState } from "react";

import {useDispatch} from "react-redux"
import {createTodolist} from "../redux/moduls/todolist"
import uuid from 'react-uuid'
import styled from "styled-components";

function Form({ setTodos, todos }) {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  const dispatch = useDispatch();

  console.log(todos);

  const [todo, setTodo] = useState(initialState);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });


  };
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") 
    
    
    return;
    // setTodos([...todos, { ...todo, id: number }]);
    dispatch(createTodolist({...todo, id:uuid}));

    setTodo(initialState);

   
  };

  
  return (
  
    <Style onSubmit={onSubmitHandler} className="add-form">
      <Div className="input-group">
        <Label className="form-label">제목</Label>
        <Input
          type="text"
          name="title"
          value={todo.title}
          className="add-input input-body"
          onChange={onChangeHandler}
        />
        <Label className="form-label">내용</Label>
        <Input
          type="text"
          name="body"
          value={todo.body}
          className="add-input"
          onChange={onChangeHandler}
        />
      </Div>
      <Button  className="add-button">추가하기</Button >
    </Style>
   
  );
}

const Style = 

styled.form`
background-color: #eee;
border-radius: 12px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 30px;
gap: 20px;
`;

const Div=
styled.div`
display: flex;
align-items: center;
gap: 20px;
`;

const Label = 
styled.label`
font-size: 16px;
font-weight: 700;
`;

const Input =
styled.input`
height: 40px;
width: 240px;
border: none;
border-radius: 12px;
padding: 0 12px;
`;

const Button =
styled.button`
border: none;
height: 40px;
border-radius: 10px;
background-color: teal;
width: 140px;
color: #fff;
font-weight: 700;
`;



export default Form;
