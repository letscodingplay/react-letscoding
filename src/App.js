import './App.css';
import Articles from "./components/articles"
import Intro from "./components/intro"
import Math from "./components/math"
import ComputerClass from "./components/computerclass"
import Curriculum from "./components/curriculum"
import Introduce from "./components/introduce"
import Location from "./components/location"
import Header from "./components/header"
import Footer from "./components/footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coding from './components/subpages/coding';
import Contact from './components/subpages/contact';
import Download from './components/subpages/download';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/coding" element={<Coding />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/download" element={<Download />}></Route>
        </Routes>
						
        <header>
          <Header />
        </header>  

        <Articles />
      
        <Intro/>

        <Math />

        <ComputerClass />

        <Curriculum/>

        <Introduce />

        <Location />
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
