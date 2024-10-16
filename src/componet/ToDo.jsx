import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItem from "./TodoItem";
const ToDo = () => {
  const inputRef = useRef();
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
  );

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prvTodos) => {
      return prvTodos.filter((ToDo) => ToDo.id !== id);
    });
  };

  const toogel = (id) => {
    setTodoList((privTodos) => {
      return privTodos.map((ToDo) => {
        if (ToDo.id === id) {
          return { ...ToDo, isComplete: !ToDo.isComplete };
        }
        return ToDo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white place-self-center w-[412px] max-w-md flex flex-col p-9 min-h-[550px] rounded-xl"
>
      {/* title */}

      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* ---------  Input Box ---------- */}

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={() => add()}
          className="border-none rounded-full bg-orange-500 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      {/* ---------  ToDo List ---------- */}

      <div>
        {todoList.map((item, index) => {
          return (
            <TodoItem
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toogel={toogel}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ToDo;
