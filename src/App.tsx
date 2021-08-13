//import { greet } from "./utils/greet";
import PhotoEntry from "./components/photoEntry";
import Thor from "./Thor.jpg";
import Hamilton from "./hamilton.jpg";

function App(): JSX.Element {
  return (
    <body>
      <header>
        <h1>My Favorite Movies</h1>
      </header>
      <main>
        <img src={Thor} alt="thor movie poster" width="50" height="100" />
        <PhotoEntry
          title="Thor: Ragnarok"
          tags={["action", "comedy", "MARVEL"]}
        />
        <img
          src={Hamilton}
          alt="hamilton musical poster"
          width="50"
          height="100"
        />
        <PhotoEntry title="Hamilton" tags={["drama", "historic", "musical"]} />
      </main>
    </body>
  );
}

export default App;
