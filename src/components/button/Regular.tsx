import React from "react";

const Regular = (props: { innerText: string }) => {
  return (
    <button className={`bg-white text-black h-12 w-40 rounded-3xl font-Gotham_Bold text-sm`}>
      {props.innerText}
    </button>
  );
};

export default Regular;
