import { MoviesList } from "./data";
import PhotoEntry from "./data";

function Main(): JSX.Element {
  return (
    <html>
      <div>{MoviesList.map(PhotoEntry)}</div>
    </html>
  );
}

export default Main;
