import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./About";
import Terms from "./Terms";
import FAQs from "./FAQs";
import Header from "./Header";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function RouteSwitch() {
  const NavStyle = {
    color: "Black",
    textDecoration: "none"
  };

  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  }

  return (
    <Router>
      <Link style={NavStyle} to="/" onClick={refreshPage}>
        <Header />
      </Link>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Nav />
    </Router>
  );
}

export default RouteSwitch;
