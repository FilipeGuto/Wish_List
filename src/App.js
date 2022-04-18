import Header from "./Components/Header/Header";
import Info from "./Components/Info/Info";
import CardList from "./Page/CardList";
import Footer from "./Components/Footer/Footer";
import "./App.css"

function App() {
  return (
    <div className="App">
        <Header />
        <Info />
        <CardList />
        <Footer />
    </div>
  );
}

export default App;
