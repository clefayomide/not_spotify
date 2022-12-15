import { nav_routes, nav_routes_2 } from "./routes";
import { v4 as uuidv4 } from "uuid";
import React from "react";

const Nav = () => {
  return (
    <nav className="w-full h-full pt-20 pb-5">
      <ul className="pl-5 flex flex-col gap-8">
        {nav_routes.map(({ name, icon }) => (
          <div className="flex gap-5 items-center w-fit" key={uuidv4()}>
            <div className="text-xs">{icon}</div>
            <li className="text-white text-sm font-Gotham_Light font-bold">
              {name}
            </li>
          </div>
        ))}

        <div className="mt-5 flex flex-col gap-8">
          {nav_routes_2.map(({ name, icon }) => (
            <div className="flex gap-5 items-center w-fit" key={uuidv4()}>
              <div className="text-xs">{icon}</div>
              <li className="text-white text-sm font-Gotham_Light font-bold">
                {name}
              </li>
            </div>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
