import {Route,Routes} from "react-router-dom";
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import About from "./Components/About";

function App() {
  return (
    <div className="App">
     <h1>Hello world</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
