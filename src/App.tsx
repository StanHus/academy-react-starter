import { Footer, Header } from "./components/styles";
import { MoviesList } from "./components/data";
import PhotoEntry from "./components/data";

function App(): JSX.Element {
  return (
    <html>
      <head>
        <title>My Favourite Movies</title>
        <link href="css/style.css" rel="stylesheet" />
      </head>
      <body>
        <header>
          <h1 style = { Header }>My Favorite Movies</h1>
        </header>
        <main>
          <div>{MoviesList.map(PhotoEntry)}</div>
        </main>
        <footer style={Footer}>
          <p>
            I decided to go in a different direction with the website here.
            Quite a few more tweeks left, but I am really happy with my work
          </p>
          <p>
            To be completely honest, I dont think I need locations, but I put
            them in anyways (in case I ever want to create a map with these
            places)
          </p>
        </footer>
      </body>
    </html>
  );
}

export default App;
