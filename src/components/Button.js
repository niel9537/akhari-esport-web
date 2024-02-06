import React from "react";

const Button = (props) => {
  return (
    <button className="bg-white text-bold text-violet-900 font-sans py-2 px-6 rounded md:ml-8 hover:bg-indigo-950 hover:text-white duration-500">
      {props.children}
    </button>
  );
};

export default Button;
