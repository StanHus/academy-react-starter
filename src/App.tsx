//import { greet } from "./utils/greet";
import PhotoEntry from "./components/photoEntry";

function App(): JSX.Element {
  return (
    <body>
      <header>
        <h1>My Favorite Places</h1>
      </header>
      <main>
        <PhotoEntry
          title="Picture 1"
          tags={["nature", "something"]}
          location={"Place 1 location"}
        />
        <PhotoEntry
          title="Picture 2"
          tags={["landscape", "something"]}
          location={"Place 2 location"}
        />
      </main>
    </body>
  );
}

export default App;
