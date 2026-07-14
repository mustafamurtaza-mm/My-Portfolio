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

<section id="services" className="py-20 max-w-5xl mx-auto px-5">


<h2 className="text-4xl font-bold mb-8">
Services
</h2>


<div className="grid md:grid-cols-2 gap-6">


{
services.map((service)=>(
    
<div
key={service.title}
className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition"
>


<h3 className="text-xl font-bold text-blue-400">
{service.title}
</h3>


<p className="text-gray-400 mt-3 leading-6">
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