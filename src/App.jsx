import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home/Home";
import Teams from './pages/Teams';
import Media from "./pages/Media";
import Web from "./pages/Web";
import Activ from './pages/Activities/Activ';
import Notice from "./pages/Notices/Notice";
import Blog from "./pages/Blog";


function App() {


  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path={"/about/:id"} element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/media" element={<Media />} />
          <Route path="/web" element={< Web />} />
          <Route path="/activity/:id" element={<Activ />} />
          <Route path="/notice/:id" element={<Notice />} />
          <Route path="/blog" element={<Blog />} />

        </Routes>
      </div>


      <Footer />

    </>
  );
}

export default App;