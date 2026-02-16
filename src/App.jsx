import NewsCard from "./components/NewsCard";
import { useGetNewsQuery } from "./store/services/newsApi";

function App() {
  const { data: news, error, isloading } = useGetNewsQuery();
  console.log("from App.jsx:", news, error, isloading);

  return (
    <>
      <div className="container mx-auto my-10">
        <h1 className="mb-10 text-center text-5xl font-bold italic">
          The Daily NEWS
        </h1>

        <div className="grid grid-cols-3 gap-4">
          {news?.articles?.map((item) => (
            <NewsCard item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
