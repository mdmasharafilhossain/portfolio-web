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
      <p className="text-3xl font-bold  text-orange-600">As a Learner</p>
       <h2>02 July 2023 - Present | Web Developer</h2>
    </div>
    <div className="timeline-middle ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 text-orange-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box border-2 border-orange-600">
        <h2>I have created many projects, some of them only with HTML, CSS.Some of are Raw Javascript. Some of are React. I made a few projects with MERN Stack also</h2>
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