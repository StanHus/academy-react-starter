import { FooterStyle, HeaderStyle, MapStyle } from "./components/styles";
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
        <link href="css/style.css" rel="stylesheet" />
      </head>
      <body>
        <header style={HeaderStyle}>{Header}</header>
        <main>
          <Main />
          <Poll />
          <h2 style={MapStyle}>
            !PlaceHolder! I am extremely annoyed with myself that I cant make an
            in-house poll
          </h2>
          <div style={MapStyle}>
            <Map />
          </div>
          <div>{}</div>
        </main>
        <footer style={FooterStyle}>{Footer}</footer>
      </body>
    </html>
  );
}

export default App;
