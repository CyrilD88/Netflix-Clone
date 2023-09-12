import "./App.scss";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* permet de faire le scroll pour que la Navbar devienne noir */}
      <div className="test"></div>
    </div>
  );
}

export default App;
