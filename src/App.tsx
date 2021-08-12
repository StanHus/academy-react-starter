//import { greet } from "./utils/greet";
import PhotoEntry from "./components/photoEntry";

function App(): JSX.Element {
  return (
    <body>
      <header>
        <h1>My Favorite Movies</h1>
        <img src="../Thor.jpg" alt="thor movie poster" />
      </header>
      <main>
        <img src="../Thor.jpg" alt="thor movie poster" />
        <PhotoEntry
          title="Thor: Ragnarok"
          tags={["action", "comedy", "MARVEL"]}
        />
        <img src="hamilton.jpg" alt="hamilton musical poster" />
        <PhotoEntry title="Hamilton" tags={["drama", "historic", "musical"]} />
      </main>
    </body>
  );
}

export default App;
