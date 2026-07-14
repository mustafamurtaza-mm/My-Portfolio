const skills=[
"React.js",
"JavaScript",
"Node.js",
"Express.js",
"MongoDB",
"C#",
".NET",
"SQL Server",
"Git/GitHub",
"REST APIs",
"Python",
"NumPy",
"Pandas",
"Scikit-learn",
"Matplotlib",
"Seaborn",
"Gradio",
"Java",
"Dart",
"Flutter"
];


function Skills(){

return(

<section id="skills" className="py-16 md:py-20 max-w-5xl mx-auto px-4 md:px-5">


<h2 className="text-3xl md:text-4xl font-bold mb-8">
Skills
</h2>


<div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5">


{
skills.map(skill=>(

<div
key={skill}
className="bg-gray-900 p-3 md:p-4 rounded-lg text-center text-sm md:text-base"
>

{skill}

</div>

))
}


</div>


</section>

)

}


export default Skills;