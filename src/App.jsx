import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import data from './Books/Data.json'
function App() {

  return (
    <>
      <h1></h1>
      <Header></Header>
      <Main></Main>
      <Card data = {data}></Card>
      <Footer></Footer>
    </>
  )
}

export default App
