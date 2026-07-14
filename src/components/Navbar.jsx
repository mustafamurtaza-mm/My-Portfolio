import { useState } from "react";

function Navbar(){

const [open,setOpen] = useState(false);

return(

<nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur z-50">

<div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3 md:px-5 md:py-5">

<h1 className="text-xl md:text-2xl font-bold">
Mustafa.dev
</h1>


<button
className="md:hidden text-2xl p-2"
onClick={()=>setOpen(!open)}
>
☰
</button>


<div
className={`${
open ? "block" : "hidden"
} md:flex space-y-4 md:space-y-0 space-x-0 md:space-x-6 absolute md:static top-14 left-0 w-full md:w-auto bg-gray-950 md:bg-transparent p-4 md:p-0`}
>


<a href="#about" className="block md:inline hover:text-blue-400 transition-colors">About</a>

<a href="#skills" className="block md:inline hover:text-blue-400 transition-colors">Skills</a>

<a href="#services" className="block md:inline hover:text-blue-400 transition-colors">Services</a>

<a href="#projects" className="block md:inline hover:text-blue-400 transition-colors">Projects</a>

<a href="#contact" className="block md:inline hover:text-blue-400 transition-colors">Contact</a>


</div>


</div>

</nav>

)

}

export default Navbar;