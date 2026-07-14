import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";


function Contact(){

return(

<section id="contact" className="py-20 max-w-5xl mx-auto px-5 text-center">


<h2 className="text-4xl font-bold">
Let's Connect
</h2>


<p className="text-gray-400 mt-5">
Feel free to contact me for opportunities, collaborations
or software development discussions.
</p>



<div className="flex justify-center gap-8 mt-8 text-3xl">


<a 
href="https://github.com/mustafamurtaza-mm"
target="_blank"
>
<FaGithub/>
</a>


<a 
href="https://www.linkedin.com/in/mustafamurtaza-mm/"
target="_blank"
>
<FaLinkedin/>
</a>


<a 
href="mailto:mustafmurtaza032@gmail.com"
>
<FaEnvelope/>
</a>


</div>


</section>

)

}

export default Contact;