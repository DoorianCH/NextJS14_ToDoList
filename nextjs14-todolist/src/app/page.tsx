"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../slice/todolistSlice";
import { useAppSelector, useAppDispatch } from "../redux/hook";

export default function Home() {
  const [text, setText] = useState<string>("");

  const toDoList = useAppSelector((state) => state.todo.toDos); // slice의 이름
  const dispatch = useAppDispatch();

  const onChange = (e: any) => {
    setText(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(add(text)); // 자료 추가
    console.log(toDoList);
    setText("");
  };
  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDoList.map((toDo) => (
          <li key={toDo.id}>
            {toDo.text}
            <button onClick={() => dispatch(remove(toDo.id))}>DEL</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
