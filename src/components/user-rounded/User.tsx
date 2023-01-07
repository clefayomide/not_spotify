import React from "react";

const User = () => {
  return (
    <div className="w-14 h-14 rounded-full bg-zinc-800 flex justify-center items-center relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-person text-gray-500"
        viewBox="0 0 16 16"
      >
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
      </svg>
      <div className="h-2 w-2 rounded-full absolute top-0 bg-blue-500 right-2"></div>
    </div>
  );
};

export default User;
