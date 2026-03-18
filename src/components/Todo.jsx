import React, { useState } from "react";
import { Trash2, Pencil } from "lucide-react";
const Todo = () => {
  const [todos, setTodos] = useState({
    list: [],
    input: "",
    editId: "",
    editText: "",
  });

  const hadleSubmit = (e) => {
    e.preventDefault();
    if (!todos.input.trim()) return;

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

  //  delete functionality:
  const handleDelete = (id) => {
    const todoAfterDelete = todos?.list?.filter((todo) => todo.id !== id);
    setTodos({
      ...todos,
      list: todoAfterDelete,
    });
  };

  //  edit functionality:
  const handleEdit = (item) => {
    console.log(item);
    setTodos({
      ...todos,
      editId: item.id,
      editText: item.todo,
    });
  };

  console.log(todos);
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="  w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 ">
        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-6 tracking-wide">
          My ToDo App
        </h1>

        {/* Form */}
        <form onSubmit={hadleSubmit} className="flex gap-2 mb-6 ">
          <input
            type="text"
            placeholder="Enter your task..."
            onChange={handleChange}
            value={todos.input}
            className="flex-1 px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white/50"
          />

          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-white text-purple-600 font-semibold hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            Add
          </button>
        </form>

        {/* Todo List */}
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {todos.list.length === 0 ? (
            <p className="text-center text-gray-200">No tasks yet!!!!!</p>
          ) : (
            todos.list.map((item) => (
              <>
                {item.id === todos.editId ? (
                  <form className=" flex items-center justify-between gap-3 w-[99%]">
                    <input
                      className="w-[90%] px-3 py-2 rounded-xl bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white/50"
                      type="text"
                      value={todos.editText}
                    />

                    <button
                      className="px-4 py-2 rounded-xl bg-white text-purple-600
                    font-semibold hover:scale-105 transition-transform
                    duration-200 cursor-pointer"
                    >
                      save
                    </button>
                  </form>
                ) : (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-white/20 px-4 py-3 rounded-xl backdrop-blur-md hover:bg-white/30 transition"
                  >
                    <div className="flex items-center justify-between gap-5  w-[100%]">
                      <div className="">
                        <p className="text-white font-medium">{item.todo}</p>
                        <span className="text-xs text-gray-300">{item.id}</span>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <div
                          className=" cursor-pointer"
                          onClick={() => handleDelete(item.id)}
                        >
                          <Trash2 />
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => handleEdit(item)}
                        >
                          <Pencil />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
