import React, { useState } from "react";
import Form from "../component/form/Form";
import Header from "../component/header/Header";
import Layout from "../component/layout/Layout";
import List from "../component/list/List";
import Detail from "../detailpage/Detail";
import {Route} from "react-router-dom";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  return (

    <Layout>   
    <Route path="/"exact>
      <Header />
      <Form setTodos={setTodos} todos={todos} />
      <List todos={todos} setTodos={setTodos} />
       </Route>
      
      <Route path="/detail/:id"component={Detail} >
      <Detail/>
      </Route>
    </Layout>
   
  );
};

export default TodoList;
