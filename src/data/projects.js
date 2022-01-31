import Blaug from "../images/projectThumbnails/blaug/blaug@0.5x.png";
import Portfolio from "../images/projectThumbnails/portfolio/portfolio@0.5x.png";

const projects = [
  {
    id: "blaug",
    name: "Blaug",
    description: "A full-stack blogging platform",
    img: Blaug,
    tech: ["react.js", "node.js", "css", "styled-components"],
    link: "https://blaug.herokuapp.com",
    source: "https://github.com/p-gurbani/blaug",
  },
  {
    id: "portfolio",
    name: "Portfolio (this)",
    description: "My personal portfolio website",
    img: Portfolio,
    tech: ["react.js", "javascript", "css", "styled-components"],
    link: "https://pankajgurbani.com",
    source: "https://github.com/p-gurbani/my-portfolio",
  },
];

export default projects;
