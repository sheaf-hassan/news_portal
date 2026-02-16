import React from "react";

const NewsCard = ({item}) => {
  return (
    <div className="border border-indigo-300 p-4 rounded-lg">
      <img
        src={item?.urlToImage}
        alt=""
        className="w-full h-52 object-cover rounded-xl"
      />
      <p className="text-2xl font-semibold mt-2 hover:underline">
        {item?.title}
      </p>
      <p className="text-amber-800 hover:text-red-800 mt-2">{item?.author}</p>
    </div>
  );
};

export default NewsCard;
