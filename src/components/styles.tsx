const Movie = {
  width: "1000px" as const,
  margin: "50px auto" as const,
  backgroundColor: "#ffffcc" as const,
  textAlign: "center" as const,
  minHeight: "200px" as const,
  boxSizing: "border-box" as const,
  border: "5px solid black" as const,
  fontSize: "23px" as const,
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

export { Footer, Header, Movie };
