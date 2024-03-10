import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import data from "./Books/Data.json";
function App() {
  return (
    <>
      <div className="container">
        <Header></Header>
        {
          data.map((v, i) =>{
            return(
              <Card key = {i} data={v}></Card>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
