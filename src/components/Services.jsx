const services = [
  {
    title: "Full Stack Development",
    description:
      "Building modern and scalable web applications using React.js, Node.js, Express.js, and MongoDB."
  },

  {
    title: "Frontend Development",
    description:
      "Creating responsive and user-friendly interfaces using React.js, JavaScript, HTML, CSS, and modern UI practices."
  },

  {
    title: "Backend & API Development",
    description:
      "Developing RESTful APIs with Node.js and Express.js including authentication, database integration, and server-side logic."
  },

  {
    title: "Database Management",
    description:
      "Designing and managing databases using MongoDB and SQL Server with efficient data handling."
  }
];


function Services(){

return(

<section id="services" className="py-16 md:py-20 max-w-5xl mx-auto px-4 md:px-5">


<h2 className="text-3xl md:text-4xl font-bold mb-8">
Services
</h2>


<div className="grid md:grid-cols-2 gap-4 md:gap-6">


{
services.map((service)=>(
    
<div
key={service.title}
className="bg-gray-900 p-4 md:p-6 rounded-xl hover:scale-105 transition"
>


<h3 className="text-lg md:text-xl font-bold text-blue-400">
{service.title}
</h3>


<p className="text-gray-400 mt-3 leading-6 text-sm md:text-base">
{service.description}
</p>


</div>

))
}


</div>


</section>

)

}


export default Services;