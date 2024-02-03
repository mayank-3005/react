import React from "react";

export default function App() {
  const [value, setvalue] = React.useState("");
  const [value1, setvalue1] = React.useState([]);

  return (
    <div>
      <h1>Todo list task</h1>
      <input value={value} onChange={(e) => setvalue(e.target.value)} />
      <button
        onClick={() => {
          setvalue1([...value1, value]);
          setvalue("");
        }}
      >
        OK
      </button>

      {value1.map((val, index) => {
        return (
          <>
            <p>{val} </p>
            <button
              onClick={(index) => {
                const abc = value1.filter((item, ind) => ind !== index);
                setvalue1(abc);
              }}
            >
              Delete
            </button>
          </>
        );
      })}
    </div>
  );
}
