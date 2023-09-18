import "./App.scss";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Row from "./components/Row";
import requests from "./config/Requests";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Programmes originaux Netflix"
        fetchurl={requests.fetchNetflixOriginals}
      />
      <Row title="Tendances actuelles" fetchurl={requests.fetchTrending} />
      <Row title="Les mieux notés" fetchurl={requests.fetchTopRated} />
      <Row title="Films d'action " fetchurl={requests.fetchActionMovies} />
      <Row title="Films d'horreur " fetchurl={requests.fetchHorrorMovies} />
      <Row title="Comédies " fetchurl={requests.fetchTopRated} />
      <Row title="Documentaire" fetchurl={requests.fetchDocumentaries} />

      <Footer />
    </div>
  );
}

export default App;
