import "./components/css/style.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Main from "./components/Main";
import Map from "./components/Map";
import Poll from "./components/Poll";

function App(): JSX.Element {
  return (
    <html>
      <head>
        <title>My Favourite Movies</title>
      </head>
      <body>
        <header className="header">{Header}</header>
        <main>
          <Main />
          <Poll />
          <h2 className="map">
            !PlaceHolder! I am extremely annoyed with myself that I cant make an
            in-house poll
          </h2>
          <div className="map">
            <Map />
          </div>
          <div>{}</div>
        </main>
        <footer className="footer">{Footer}</footer>
      </body>
    </html>
  );
}

export default App;
