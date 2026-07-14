function Navbar(){

return(

<nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur z-50">

<div className="max-w-6xl mx-auto flex justify-between p-5">

<h1 className="text-2xl font-bold">
Mustafa.dev
</h1>


<div className="space-x-6">

<a href="#about">About</a>

<a href="#skills">Skills</a>

<a href="#projects">Projects</a>

<a href="#services">Services</a>

<a href="#contact">Contact</a>

</div>

</div>

</nav>

)

}

export default Navbar;