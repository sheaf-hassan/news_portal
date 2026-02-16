import { Link, Route, Routes } from "react-router";
import NewsCard from "./components/NewsCard";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <div className="container mx-auto my-10">
        <h1 className="mb-10 text-center text-5xl font-bold italic">
          The Daily NEWS
        </h1>

        <div className="flex flex-row items-center justify-center gap-10 mb-10">
          <Link to="/">Home</Link>
          <p>News</p>
          <Link to="/blog">Blogs</Link>
          <p>Contact</p>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
