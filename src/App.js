import About from "./components/About/About";
import Feature from "./components/Features/Feature";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Testimonial from "./components/Testimonial/Testimonial";
import Nav from './components/Nav/Nav'
function App() {
  return (
    <div className="App">  
  <div id="Home">
     <Home/>
  </div>
    <div id="Feature">
      <Feature/>
      </div>
   <div id="Testimonial">
   <Testimonial/> 
   </div>
   <div id="About">
   <About/>
   </div>
    
    <Footer/>
    </div>
  );
}

export default App;
