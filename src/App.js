import "./App.css";
import { Article } from "./components/Article";
import { Article } from "./components/MoviesList/MoviesList";

function App() {
  const movies = [
    {
      title: "Betman",
      url: "",
      info: "milioner",
    },
    {
      title: "Harry Potter",
      url: "",
      info: "love Hermoine",
    },
    {
      title: "Doctor Who",
      url: "",
      info: "tardis",
    },
    {
      title: "Vampires Daires",
      url: "",
      info: "salvator",
    },
    {
      title: "Originals",
      url: "",
      info: "Klaus",
    },
  ];
  return (
    <div className="App">
      <h1>Hello</h1>
      <MoviesList moviesListData={movies}></MoviesList>
      <Article />
    </div>
  );
}

export default App;
