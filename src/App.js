import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Blogs from "./pages/Blogs"
import Home from "./pages/Home"
import Aide from "./pages/Aide"

function App() {
  return (
    <Router>
      
      <Navbar/>
      <Home/> 
      <Blogs/>
      <Contact/>
        
      <Routes>
        
        <Route path='/Contact' exact component={Contact} />
        <Route path='/Blogs'  component={Blogs} />
        <Route path='/Home' component={Home} />
        <Route path='/Aide' component={Aide} />
      </Routes>
      
    </Router>
  );
}

export default App;