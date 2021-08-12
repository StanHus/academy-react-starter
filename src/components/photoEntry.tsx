interface photoEntryProps {
  title: string;
  tags: string[];
  location: string;
}

function PhotoEntry(props: photoEntryProps): JSX.Element {
  return (
    <section>
      <h2>{props.title}</h2>
      <p>
        <i>Tags: {props.tags.join(", ")}</i>
      </p>
      <p>{props.location}</p>
    </section>
  );
}

export default PhotoEntry;
