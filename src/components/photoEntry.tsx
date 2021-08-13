interface photoEntryProps {
  title: string;
  tags: string[];
  description: string;
  link: string
}

function PhotoEntry(props: photoEntryProps): JSX.Element {
  return (
    <section>
      <h2>{props.title}</h2>
      <p>
        <i>Tags: {props.tags.join(", ")}</i>
      </p>
      <p>{props.description}</p>
      <p>{props.link}</p>
    </section>
  );
}

export default PhotoEntry;
