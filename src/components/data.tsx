interface photoEntryProps {
    title: string;
    tags: string[];
    description: string;
    image: string;
    link: string;
  }

  function PhotoEntry(props: photoEntryProps): JSX.Element {
    return (
      <section >
        <h2>{props.title}</h2>
        <img src={props.image} alt="movie poster" width="250" height="350" />
        <p>
          <i>Tags: {props.tags.join(", ")}</i>
        </p>
        <p>{props.description}</p>
        <p>
          <a href={props.link}>
            <strong>Location</strong> in focus
          </a>
        </p>
      </section>
    );
  }

  const Movie = {
    width: "1000px" as const,
    margin: "50px auto" as const,
    backgroundColor: "#ffffcc" as const,
    textAlign: "center" as const,
    minHeight: "200px" as const,
    boxSizing: "border-box" as const,
    border: "5px solid black" as const,
  };

const moviesList: photoEntryProps[]= [
    {title: "Thor: Ragnarok",
    image: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
    tags: ["action", "comedy", "MARVEL"],
    description: "Magic boy loses his toy, befriends a green dude from the playground, punches his sister, and burns their house down",
    link: "https://goo.gl/maps/qxt9vcwFuB8JRr4x6"},
  
    {title: "Hamilton",
    image: "https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_.jpg",
    tags: ["drama", "historic", "musical"],
    description: "A talkative man makes plans, friends, drama, and some tradeoffs in a complex geopolitical situation",
    link: "https://goo.gl/maps/r1hHSQuQ5NQb3qRv5"},
  
    {title: "Supernova",
    image: "https://m.media-amazon.com/images/M/MV5BNDc0Y2FjZjgtOWNkYy00NjdjLWE3ZjYtZGYyNDdmYzZiZGYzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
    tags: ["drama", "romance"],
    description: "Touching romance, but an even more powerful drama tackling the most difficult challenges in life",
    link: "https://goo.gl/maps/1rf5JdZnmFzzPeLx8"},
  
    {title:"Fight club",
    image:"https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    tags:["action", "thriller"],
    description: "Boys be boys. Fans of soap fight, hang out together, and plan an elaborate scheme to undermine the US financial infrastructure",
    link: "https://goo.gl/maps/QhQ2CRShC9mLywUQ7"}
  ]

  export const mappedMovies = moviesList.map((photoEntryProps) => (
    <div style = {Movie}>{photoEntryProps}</div>
  ));