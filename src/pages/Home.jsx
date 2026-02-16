import React from "react";
import { useGetNewsQuery } from "../store/services/newsApi";
import NewsCard from "../components/NewsCard";

const Home = () => {
  const { data: news, error, isloading } = useGetNewsQuery();
  console.log("from App.jsx:", news, error, isloading);

  return (
    <div className="grid grid-cols-3 gap-4">
      {news?.articles?.map((item) => (
        <NewsCard item={item} />
      ))}
    </div>
  );
};

export default Home;
