import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-col items-center rounded-lg min-h[300px] h-full bg-white shadow-md dark:bg-neutral-700 p-6">
      <h1 className=" flex flex-col gap-2 text-center mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 w-max">
        {props.title}
        <span className="w-full h-1 bg-blue" />
      </h1>
      <p className="text-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {props.description}
      </p>
    </div>
  );
};

export default Card;
