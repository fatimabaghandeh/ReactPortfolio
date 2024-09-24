import App from "../pages/home";
import Layout from "../components/Layout";
import Contact from "../pages/contact";
import Projects from "../pages/projects";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  </Router>
);

export default router;
