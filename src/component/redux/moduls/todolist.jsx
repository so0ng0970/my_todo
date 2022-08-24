
// todolist.js

import {createAction} from "redux-actions"

// Actions

const CREATE = "todolist/CREATE";
const DELETE = "todolist/DELETE";
const TOGGLE = "todolist/TOGGLE";

// id 기본 값 설정
// 기존 initialState에서 설정된 값 이후부터 가져오면 됨
let nextId = 0;

// initialState라는 객체안에 todo라는 속성이 있고, todo는 여러개의 객체 데이터를 갖게 되므로 여러 객체들을 [](배열) 형태로 묶어줘야한다.
const initialState = {
  todos:[]
};

// Action Creators
export function createTodolist(todolist) {
  return {
    type: CREATE,
    todo: {
      id: nextId++,
      title: todolist.title,
      body: todolist.body,
      isDone: false,
    },
  };
}


export const deleteTodolist=createAction(DELETE , (payload)=>payload);
export const toggleTodolist=createAction(TOGGLE, (payload)=>payload);

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return {...state,todos: state.todos.concat(action.todo), };

    //삭제 
   case DELETE :
    return{
      todos : state.todos.filter((todo)=>todo.id !==action.payload)
    };

  //바꾸기
    case TOGGLE:
      return{
        todos: state.todos.map((todo)=>{
          return todo.id===action.payload?{...todo,isDone: !todo.isDone}:todo
        })
      } 
 
    default:
      return state;
      }
    };

// // Reducer -> 기존 코드
// export default function reducer(state = initialState, action = {}) {
//   switch (action.type) {
//     // case CREATE: {
//     //   const new_todos_list = […state.todos, action.todolist];
//     //   return { todo: new_todos_list };
//     // }
//     case CREATE:
//       return {
//         …state,
//         todos: state.todos.concat(action.todo),
//       };

//     case "todolist/DELETE": {
//       return state;
//     }

//     default:
//       return state;
//   }
// }

export default reducer;
