import { useState } from "react";

function Navbar(){

const [open,setOpen] = useState(false);

return(

<nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur z-50">

<div className="max-w-6xl mx-auto flex justify-between items-center p-5">

<h1 className="text-2xl font-bold">
Mustafa.dev
</h1>


<button
className="md:hidden text-2xl"
onClick={()=>setOpen(!open)}
>
☰
</button>


<div
className={`${
open ? "block" : "hidden"
} md:flex space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-950 md:bg-transparent p-5 md:p-0`}
>


<a href="#about">About</a>

<a href="#skills">Skills</a>

<a href="#services">Services</a>

<a href="#projects">Projects</a>

<a href="#contact">Contact</a>


</div>


</div>

</nav>

)

}

export default Navbar;