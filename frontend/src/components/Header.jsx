/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

export default function Header() {
  return (
    <div className="grid grid-cols-12 gap-4 h-20 bg-blue-900">
      <div className="col-start-5 flex items-center justify-center col-end-9">
        <h1 className=" text-white text-center text-2xl font-bold">
          Pompiers de Lyon
        </h1>
      </div>
    </div>
  );
}
