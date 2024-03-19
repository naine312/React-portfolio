import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.scss";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
