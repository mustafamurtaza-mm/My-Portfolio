import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App(){

return(
<div className="bg-gray-950 text-white min-h-screen">

<Navbar/>

<Hero/>

<About/>

<Skills/>

<Projects/>

<Services/>

<Contact/>

</div>
)

}

export default App;