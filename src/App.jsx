import "./App.css";
import Header from "./components/Header";
import data from "./Books/Data.json";
import Books from "./components/Books";
function App() {
  return (
    <>
      <div className="container">
        <Header></Header>
        <Books books = {data}></Books>
      </div>
    </>
  );
}

export default App;
