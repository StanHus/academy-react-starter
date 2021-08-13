//import { greet } from "./utils/greet";
import PhotoEntry from "./components/photoEntry";
// import Thor from "./Thor.jpg";
// import Hamilton from "./hamilton.jpg";
// import Supernova from "./supernova.jpg";

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
  padding: "30px 20px" as const,
  width: "1000px" as const,
  margin: "50px auto" as const,
  backgroundColor: "#4d0026" as const,
  textAlign: "center" as const,
  color: "white" as const,
  fontSize: "50px" as const,
  border: "3px double black" as const,
};

const Footer = {
  padding: "30px 20px" as const,
  width: "1000px" as const,
  backgroundColor: "#4d0026" as const,
  textAlign: "center" as const,
  color: "white" as const,
  margin: "50px auto" as const,
  fontSize: "25x" as const,
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
            image="https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg"
            tags={["action", "comedy", "MARVEL"]}
            description="Magic boy loses his toy, befriends a green guy from their sandbox, punches his sister, and burns their house"
            link="https://goo.gl/maps/qxt9vcwFuB8JRr4x6"
          />
          {/* <img src={Thor} alt="thor movie poster" width="250" height="350" /> */}
        </div>

        <div style={styles.Movie}>
          <PhotoEntry
            title="Hamilton"
            image="https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_.jpg"
            tags={["drama", "historic", "musical"]}
            description="A talkative dude makes plans, friends, drama, and some tradeoffs in a complex geopolitical situation"
            link="https://goo.gl/maps/r1hHSQuQ5NQb3qRv5"
          />
          {/* <img
            src={Hamilton}
            alt="hamilton musical poster"
            width="250"
            height="350"
          /> */}
        </div>

        <div style={styles.Movie}>
          <PhotoEntry
            title="Supernova"
            image="https://m.media-amazon.com/images/M/MV5BNDc0Y2FjZjgtOWNkYy00NjdjLWE3ZjYtZGYyNDdmYzZiZGYzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg"
            tags={["drama", "romance"]}
            description="Touching romance, but an even more powerful drama tackling the most difficult challenges in life"
            link="https://goo.gl/maps/1rf5JdZnmFzzPeLx8"
          />
          {/* <img
            src={Supernova}
            alt="Supernova movie poster"
            width="250"
            height="350"
          /> */}
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
