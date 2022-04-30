import "./css/App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container-body">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
