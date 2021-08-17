import { FooterStyle, HeaderStyle, MapStyle } from "./components/styles";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Main from "./components/Main";
import Map from "./components/Map";

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
          <div style={MapStyle}>
            <Map />
          </div>
        </main>
        <footer style={FooterStyle}>{Footer}</footer>
      </body>
    </html>
  );
}

export default App;
