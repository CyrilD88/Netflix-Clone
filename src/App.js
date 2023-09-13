import "./App.scss";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* permet de faire le scroll pour que la Navbar devienne noir */}
      <div className="test"></div>
      <Footer />
    </div>
  );
}

export default App;
