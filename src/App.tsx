//import PhotoEntry from "./components/photoEntry";
import { Footer, Header, Movie } from "./components/styles";
import { MoviesListMapped } from "./components/data";
//import {MoviesList} from "./components/data"

function App(): JSX.Element {
  return (
    <body>
      <header>
        <h1 style={Header}>My Favorite Movies</h1>
      </header>
      <main>
        <div style={Movie}>{MoviesListMapped}</div>
      </main>
      <footer style={Footer}>
        <p>
          I decided to go in a different direction with the website here. Quite
          a few more tweeks left, but I am really happy with my work
        </p>
        <p>
          To be completely honest, I dont think I need locations, but I put them
          in anyways (in case I ever want to create a map with these places)
        </p>
      </footer>
    </body>
  );
}

export default App;
