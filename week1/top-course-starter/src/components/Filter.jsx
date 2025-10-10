import React from "react";

const Filter = ({ filterData, category, setCategory }) => {
  function filterHandler(title) {
    setCategory(title);
  }
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => {
        return (
          <button
            onClick={() => filterHandler(data.title)}
            key={data.id}
            className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 hover:text-white border-2 transition-all duration-300
${
  category === data.title
    ? "bg-ipacity-60 border-white"
    : "bg-ipacity-60 border-transparent"
}`}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
