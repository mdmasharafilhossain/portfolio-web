import { GiRoundShield } from "react-icons/gi";
import { MdAssuredWorkload } from "react-icons/md";
const Experience = () => {
    return (
        <div id="exp" className="mt-28 container mx-auto mb-10">
            <h2 className="text-5xl font-bold border-l-4 pl-4 border-orange-600">Experience</h2>
            <div className="mt-20">
            <ul className="timeline timeline-vertical text-2xl">
  <li>
    
    <div className="timeline-middle">
    <span className="text-7xl text-orange-600" ><MdAssuredWorkload className="border-2 border-orange-600  p-2 rounded-full"/></span>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> */}
    </div>
    <hr/>
  </li>
  
  <li>
    < hr className="bg-orange-600 my-10"/>
    <div className="timeline-start timeline-box border-2 border-orange-600">
      <p className="text-3xl font-bold  text-orange-600">Niyamat IT</p>
       <h2>November 2024 to Present | Full Stack Developer</h2>
    </div>
    <div className="timeline-middle ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 text-orange-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box border-2 border-orange-600">
        <h2>At Niyamat IT, I have been working as a Full Stack Developer (Full-time) since November 2024 in a remote role based in Narayanganj, Bangladesh. My responsibilities include managing full-stack development and maintenance of scalable web applications using the MERN stack. I handle both frontend and backend tasks, ensuring smooth deployment and optimal performance. Additionally, I have introduced modern UI components, enhancing the user experience with a more engaging and responsive design.</h2>
    </div>
    <hr className=" my-20 bg-orange-600" />
  </li>
  <li>
    < hr className="bg-orange-600 my-10"/>
    <div className="timeline-start timeline-box border-2 border-orange-600">
      <p className="text-3xl font-bold  text-orange-600">Niyamat IT</p>
       <h2>July 2024 to November 2024 | Full Stack Developer (Intern)</h2>
    </div>
    <div className="timeline-middle ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 text-orange-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box border-2 border-orange-600">
        <h2>I worked as a Full Stack Developer Intern at Niyamat IT from July 2024 to November 2024. During my internship, I focused on solving debugging issues and optimizing application performance for seamless functionality. I contributed to both front-end and back-end development, gaining valuable experience in building efficient and high-performing applications.</h2>
    </div>
    <hr className=" my-20 bg-orange-600" />
  </li>
  <li>
    
    <div className="timeline-middle">
    <span className="text-3xl text-orange-600" ><GiRoundShield  className="border-2 border-orange-600  p-2 rounded-full"/></span>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> */}
    </div>
    <hr/>
  </li>
  
</ul>
            </div>
        </div>
    );
};

export default Experience;