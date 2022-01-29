import "./App.css";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./theme/useDarkMode";
import { GlobalStyles } from "./theme/globalStyles";
import { THEMES, lightTheme, darkTheme } from "./theme/themes";
import TopBar from "./components/topBar/TopBar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

// Routing imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === THEMES.LIGHT ? lightTheme : darkTheme;

  // if theme is not loaded return empty
  if (!componentMounted) return <div />;

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <>
          <ScrollToTop />
          <GlobalStyles />
          <div className="app">
            <TopBar toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </>
      </ThemeProvider>
    </Router>
  );
};

export default App;
