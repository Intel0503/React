import { useState } from "react";

const AddNum = (props) => {
  return (
    <>
      <h1 className={props.myStyle}>Number is {props.count}</h1>
      <button
        onClick={props.handleAdd}
        className="bg-blue-500 hover:bg-blue-700 rounded-lg px-8 m-4 text-white text-1xl font-medium py-2"
      >
        Click
      </button>

      {/* PLACEHOLDER */}
    </>
  );
};

export default AddNum;
