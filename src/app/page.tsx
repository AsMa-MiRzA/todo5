"use client"

import { useState } from "react";

export default function Home() {
  // define state
  const [todos, setTodos] = useState([
    { subject: "English", id: 1 },
    { subject: "Maths", id: 2 },

  ]);

  const [inputVal, setInput] = useState("");

  const [id, setId] = useState(0);

  // function


  const addItem = () => {
    let obj: any = todos.find((item) => item.id == id);

    if (obj) {
      let newArray = todos.filter((item) => item.id !== obj.id);
      setTodos([...newArray, { subject: inputVal, id: id }]);
      setInput("");
      setId(0);
      return;
    }

    setTodos([...todos, { subject: inputVal, id: id }])
    setInput("")
    setId(0)
  }

  const editItem = (id: any) => {
    let obj: any = todos.find((item) => item.id == id);
    setInput(obj.subject);
    setId(obj.id);
  };

  const delItem = (id: any) => {
    let newArray = todos.filter((item) => item.id !== id);
    setTodos([...newArray]);
  };
  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-center text-[40px] underline">
        TODO SUBJECTS
      </h1>

      {/* start input div */}
      <div className="flex justify-between gap-4 mt-5">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInput(e.target.value)}
          className="w-[60%] p-2 ml-3 text-lg border-b focus:outline-none"
          placeholder="write subject" />
        <input
          type="number"
          value={id}
          onChange={(e: any) => setId(e.target.value)}
          className="w-[60%] p-2 ml-3 text-lg border-b focus:outline-none"
          placeholder="write id" />
        <button onClick={addItem} className="bg-blue-500 hover:bg-blue-300 w-[20%] text-white p-2 rounded">
          Add Subject
        </button>
      </div>
      {/* end input div */}

      {/* heading */}
      <h1 className="text-center text-[40px] underline mt-5">Subjects List</h1>

      {/* subjects list */}
      <div className=" grid grid-cols-2 gap-5 mt-5">

        {/* grid item */}
        {
          todos.map((item: any, i: any) => {
            return (
              <div className="shadow p-4" key={i}>
                <div className="flex justify-between text-lg">
                  <span className="shadow rounded-full h-8 w-8 text-center my-auto">
                    {i + 1}

                  </span>
                  <span onClick={() => delItem(item.id)}
                    className="shadow rounded-full h-8 w-8 text-center my-auto  cursor-pointer text-red-700 ">
                    X
                  </span>
                </div>

                {/* data div */}

                <div className="mt-5 text-[30px] text-gray-700">{item.subject}</div>
                <div>
                  <h2
                    onClick={() => editItem(item.id)}
                    className="text-right cursor-pointer">
                    Edit
                  </h2>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>

  );
}
