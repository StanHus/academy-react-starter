//import { greet } from "./utils/greet";
import PhotoEntry from "./components/photoEntry";
import Thor from "./Thor.jpg";
import Hamilton from "./hamilton.jpg";
import Supernova from "./supernova.jpg";

const Movie = {
  width: "1000px" as const,
  margin: "50px auto" as const,
  backgroundColor: "#ffffcc" as const,
  textAlign: "center" as const,
  minHeight: "200px" as const,
  boxSizing: "border-box" as const,
  border: "5px solid black" as const,
};

const Header = {
  padding: "10px 20px" as const,
  width: "1000px" as const,
  backgroundColor: "#b3b3cc" as const,
  textAlign: "center" as const,
  color: "black" as const,
  fontSize: "40px" as const,
  border: "3px double black" as const,
};

const Footer = {
  padding: "10px 20px" as const,
  width: "1000px" as const,
  backgroundColor: "#b3b3cc" as const,
  textAlign: "center" as const,
  color: "black" as const,
  fontSize: "20px" as const,
  border: "3px double black" as const,
};

const styles = {
  Movie: Movie,
  Header: Header,
  Footer: Footer,
};

function App(): JSX.Element {
  return (
    <body>
      <header>
        <h1 style={styles.Header}>My Favorite Movies</h1>
      </header>
      <main>
        <div style={styles.Movie}>
          <PhotoEntry
            title="Thor: Ragnarok"
            tags={["action", "comedy", "MARVEL"]}
            description="Magic boy loses his toy, befriends a green guy from their sandbox, punches his sister, and burns their house"
            link="https://www.imdb.com/title/tt3501632/"
          />
          <img src={Thor} alt="thor movie poster" width="250" height="350" />
        </div>

        <div style={styles.Movie}>
          <PhotoEntry
            title="Hamilton"
            tags={["drama", "historic", "musical"]}
            description="A talkative dude makes plans, friends, drama, and some tradeoffs in a complex geopolitical situation"
            link="https://www.imdb.com/title/tt8503618/"
          />
          <img
            src={Hamilton}
            alt="hamilton musical poster"
            width="250"
            height="350"
          />
        </div>

        <div style={styles.Movie}>
          <PhotoEntry
            title="Supernova"
            tags={["drama", "romance"]}
            description="Touching romance, but an even more powerful drama tackling the most difficult challenges in life"
            link="https://www.imdb.com/title/tt11169050/"
          />
          <img
            src={Supernova}
            alt="Supernova movie poster"
            width="250"
            height="350"
          />
        </div>
      </main>
      <footer style={styles.Footer}>
        <p>
          I decided to go in a different direction with the website here. Quite
          a few more tweeks left, but I am really happy with my work
        </p>
      </footer>
    </body>
  );
}

export default App;
