import { FaGithub } from "react-icons/fa";

const projects=[

{
title:"MediTrack Hospital Management System",
desc:"Hospital management desktop application using C#, MVC and SQL Server.",
link:"https://github.com/mustafamurtaza-mm/Hospital-Management-System"
},

{
title:"DriftTask",
desc:"Task management application built using MERN stack.",
link:"https://github.com/mustafamurtaza-mm/Drifttask"
},

{
title:"Predictive Health Analysis System",
desc:"Health analysis system leveraging machine learning for predictive diagnostics.",
link:"https://github.com/mustafamurtaza-mm/Predictive-Health-Analysis-System"
}

];


function Projects(){

return(

<section id="projects" className="py-16 md:py-20 max-w-5xl mx-auto px-4 md:px-5">


<h2 className="text-3xl md:text-4xl font-bold mb-8">
Projects
</h2>



<div className="grid md:grid-cols-3 gap-4 md:gap-6">


{
projects.map(project=>(

<div className="bg-gray-900 p-4 md:p-6 rounded-xl">

<h3 className="text-lg md:text-xl font-bold">

{project.title}

</h3>


<p className="text-gray-400 mt-3 text-sm md:text-base">

{project.desc}

</p>


<a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm text-gray-300 hover:text-white transition-colors">
<FaGithub /> View on GitHub
</a>


</div>

))

}


</div>


</section>

)

}


export default Projects;