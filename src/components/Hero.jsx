import {motion} from "framer-motion";


function Hero(){

return(

<section className="h-screen flex flex-col justify-center items-center text-center px-5">


<motion.h1

initial={{opacity:0,y:-40}}

animate={{opacity:1,y:0}}

transition={{duration:0.8}}

className="text-5xl md:text-7xl font-bold"

>

Hi, I'm Mustafa

</motion.h1>



<h2 className="text-2xl mt-5 text-blue-400">

Software Engineering Student

</h2>



<p className="max-w-xl mt-6 text-gray-400">

I build modern web applications using React, Node.js,
Express and MongoDB. Passionate about software development,
problem solving and learning new technologies.

</p>



<div className="mt-8">

<a

href="#projects"

className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"

>

View My Work

</a>

<a
href="/Mustafa_Murtaza_SoftwareEngineering_CV.pdf"
download
className="ml-4 border border-blue-500 px-6 py-3 rounded-lg"
>
Download Resume
</a>

</div>


</section>

)

}


export default Hero;