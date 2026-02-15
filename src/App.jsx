import { useGetNewsQuery } from "./store/services/newsApi";

function App() {
  const { data, error, isloading } = useGetNewsQuery();
  console.log("from App.jsx:", data, error, isloading);
  return (
    <>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
