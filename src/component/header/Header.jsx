import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Div className="container">
      <div>My Todo List</div>
      <div>React</div>
    </Div>
  );
}
export default Header;


const Div=
styled.div`
border: 1px solid #ddd;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

