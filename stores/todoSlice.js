import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (res.ok) {
    const todos = await res.json();
    
    return { todos };
  }
});

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, tag: "heo", title: "mja", completed: false },
    { id: 2, tag: "wo", title: "sho", completed: true },
    { id: 3, tag: "zi", title: "ching", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        tag: action.payload.tag,
      };
      console.log(action.payload)
      state.push(newTodo);
    },
    editTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      const upadtedTodo = {
        ...state[index], // or id:action.payload.id
        title: action.payload.title,
        tag: action.payload.tag,
        completed: action.payload.completed,
      };
      state[index] = upadtedTodo;
    },
    toggleTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    
  },
  extraReducers:{
    [getTodos.pending]:(state,action)=>{
        console.log('fetching data....')
    },
      [getTodos.fulfilled]:(state,action)=>{
          return action.payload.todos
      }
  }
});

export const { addTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
