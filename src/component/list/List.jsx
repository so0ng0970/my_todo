

import React from "react";
import Todo from "./Todo";

import { useSelector } from "react-redux";

import styled from "styled-components";


function List() {

  const { todos } = useSelector((state) => state.reducer);

  return (

    <Div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <Wrapper className="list-wrapper">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
          
              />
            );
          } else {
            return null;
          }
        })}
      </Wrapper>
      <h2 className="list-title">Done..! 🎉</h2>
      < Wrapper className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
              
              />
            );
          } else {
            return null;
          }
        })}
      </ Wrapper>
    </Div>
  );
}



const Div = styled.div`
padding: 0 24px;
margin: auto;

`;


const Wrapper = styled.div`
display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-content: space-around;
  margin: auto;
  row-gap: 12px;
`;


export default List;


