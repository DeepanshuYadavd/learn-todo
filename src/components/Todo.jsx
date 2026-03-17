import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState({
    list: [{}, {}],
    input: "",
  });

  const hadleSubmit = (e) => {
    e.preventDefault();
    setTodos({
      ...todos,
      list: [
        ...todos.list,
        {
          id: new Date().toLocaleTimeString(),
          todo: todos.input,
          status: "Incomplete",
        },
      ],
      input: "",
    });
  };
  const handleChange = (e) => {
    setTodos({
      ...todos,
      input: e.target.value,
    });
  };
  console.log(todos);
  return (
    <>
      <h1>My ToDo App</h1>
      <form onSubmit={hadleSubmit}>
        <input
          className="border-2 border-purple-600 "
          type="text"
          placeholder="Enter Task"
          onChange={handleChange}
          value={todos.input}
        />

        <button>save</button>
      </form>

      <div>
        {todos.list?.map((item) => {
          return (
            <div>
              {item.todo} <span>{item.id}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
