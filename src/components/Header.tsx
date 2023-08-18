import React from "react";

export default function Header() {
  return (
    <div className="">
      <h1 className="flex justify-center mt-8 text-3xl font-bold">
        Add Id to your json file !
      </h1>
      <p className="flex justify-center mt-4">
        Upload your json file or dataset and it will add automatically ids for
        each entries !
      </p>
      <p className="flex justify-center text-red-600 mt-2">
        Unlimited entries !
      </p>
    </div>
  );
}
