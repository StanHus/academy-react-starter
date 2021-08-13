//import { greet } from "./utils/greet";
import PhotoEntry from "./components/photoEntry";
import Thor from "./Thor.jpg";
import Hamilton from "./hamilton.jpg";
import Supernova from "./supernova.jpg";
import { styles } from "./styles";

function App(): JSX.Element {
  return (
    <body>
      <header>
        <h1 style={styles.Header}>My Favorite Movies</h1>
      </header>
      <main style={styles.Movie}>
        <PhotoEntry
          title="Thor: Ragnarok"
          tags={["action", "comedy", "MARVEL"]}
          description="Magic boy loses his toy, befriends a green guy from their sandbox, punches his sister, and burns their house"
        />
        <img src={Thor} alt="thor movie poster" width="200" height="350" />

        <p>Separator</p>

        <PhotoEntry
          title="Hamilton"
          tags={["drama", "historic", "musical"]}
          description="A talkative dude makes plans, friends, drama, and some tradeoffs in a complex geopolitical situation"
        />
        <img
          src={Hamilton}
          alt="hamilton musical poster"
          width="200"
          height="350"
        />
        <PhotoEntry
          title="Supernova"
          tags={["drama", "romance"]}
          description="Touching romance, but an even more powerful drama tackling the most difficult challenges in life"
        />
        <img
          src={Supernova}
          alt="Supernova movie poster"
          width="200"
          height="350"
        />
      </main>
    </body>
  );
}

export default App;
