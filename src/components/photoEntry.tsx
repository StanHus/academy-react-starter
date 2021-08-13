interface photoEntryProps {
  title: string;
  tags: string[];
  description: string;
  //   link: <link rel="import" href="component.html" />
  link: string;
}

function PhotoEntry(props: photoEntryProps): JSX.Element {
  return (
    <section>
      <h2>{props.title}</h2>
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

export default PhotoEntry;
