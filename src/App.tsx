import PhotoEntry from "./components/photoEntry";
import { Footer, Header, Movie } from "./components/styles";

function App(): JSX.Element {
  return (
    <body>
      <header>
        <h1 style={Header}>My Favorite Movies</h1>
      </header>
      <main>
        <div style={Movie}>
          <PhotoEntry
            title="Thor: Ragnarok"
            image="https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg"
            tags={["action", "comedy", "MARVEL"]}
            description="Magic boy loses his toy, befriends a green guy from their sandbox, punches his sister, and burns their house"
            link="https://goo.gl/maps/qxt9vcwFuB8JRr4x6"
          />
        </div>

        <div style={Movie}>
          <PhotoEntry
            title="Hamilton"
            image="https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_.jpg"
            tags={["drama", "historic", "musical"]}
            description="A talkative dude makes plans, friends, drama, and some tradeoffs in a complex geopolitical situation"
            link="https://goo.gl/maps/r1hHSQuQ5NQb3qRv5"
          />
        </div>

        <div style={Movie}>
          <PhotoEntry
            title="Supernova"
            image="https://m.media-amazon.com/images/M/MV5BNDc0Y2FjZjgtOWNkYy00NjdjLWE3ZjYtZGYyNDdmYzZiZGYzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg"
            tags={["drama", "romance"]}
            description="Touching romance, but an even more powerful drama tackling the most difficult challenges in life"
            link="https://goo.gl/maps/1rf5JdZnmFzzPeLx8"
          />
        </div>

        <div style={Movie}>
          <PhotoEntry
            title="Fight club"
            image="https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
            tags={["action", "thriller"]}
            description="Boys be boys. Fans of soap fight, hang out together, and plan an elaborate scheme to undermine the US financial structure"
            link="https://goo.gl/maps/QhQ2CRShC9mLywUQ7"
          />
        </div>
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
