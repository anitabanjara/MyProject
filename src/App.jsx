import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Navbar";
import About from "./pages/About";
import Activ from "./pages/Activities/Activ";
import Draw from "./pages/Activities/Components/Draw";
import Election from "./pages/Activities/Components/Election";
import Friday from "./pages/Activities/Components/Friday";
import Garden from "./pages/Activities/Components/Garden";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home/Home";
import Message from "./pages/Message";
import Teacherwant from "./pages/Notices/Components/Teacherwant";
import Vacancy from "./pages/Notices/Components/Vacancy";
import Notice from "./pages/Notices/Notice";
import Teams from "./pages/Teams";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/message" element={<Message />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/activ" element={<Activ />} />
          <Route path="/draw" element={<Draw />} />
          <Route path="/election" element={<Election />} />
          <Route path="/friday" element={<Friday />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/teacher" element={<Teacherwant />} />
          <Route path="/vacancy" element={<Vacancy />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
