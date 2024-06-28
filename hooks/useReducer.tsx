import { useReducer, useState, useRef } from "react";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "add-task":
      return {
        ...state,
        tasks: [...state.tasks, { name: action.payload, isCompleted: false }],
        taskCount: state.taskCount + 1,
      };
    case "toggle-task":
      return {
        ...state,
        tasks: state.tasks.map((item, index) => index === action.payload ? { ...item, isCompleted: !item.isCompleted } : item),
      };
    case "delete-task":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.name != action.payload),
        taskCount: state.taskCount - 1
      }
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { tasks: [], taskCount: 0 });
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <div className="flex gap-4 items-center">
        <p className="text-2xl mr-5">{state.taskCount}</p>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className="outline-none text-slate-900 px-1 py-2 rounded-md"
        />
        <button
          onClick={() => {
            dispatch({ type: "add-task", payload: inputValue });
            setInputValue("");
          }}
          className="cursor-pointer text-black bg-slate-200 px-4 py-2 rounded-md"
        >
          Add task
        </button>
      </div>
      {state.tasks.map((task: any, index: any) => (
        <div key={task.name} className="flex items-center justify-between gap-2 w-full mt-3">
          <p onClick={() => dispatch({ type: "toggle-task", payload: index })}
            className={task.isCompleted ? 'line-through' : 'line-through-none'}
          >
            <span>{task.name}</span>
          </p>
          <button
            onClick={() => {
              dispatch({ type: "delete-task", payload: task.name });
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default UseReducer;
