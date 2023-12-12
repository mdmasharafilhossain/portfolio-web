

const Skill = () => {
    return (
        <div id="skill" className="mt-20 container mx-auto">
            <h2 className="text-5xl font-bold border-l-4 pl-4 border-orange-600">Skills</h2>
            <div className="mt-20 gap-24 lg:ml-40 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div>
            <div className="radial-progress text-orange-600 " style={{"--value":90}} role="progressbar">90%</div>
            <h1 className="ml-4 font-bold mt-1">HTML</h1>
            </div>
            <div>
            <div className="radial-progress text-orange-600 " style={{"--value":60}} role="progressbar">60%</div>
            <h1 className=" font-bold mt-1">JAVASCRIPT</h1>
            </div>
            <div>
            <div className="radial-progress text-orange-600 " style={{"--value":90}} role="progressbar">90%</div>
            <h1 className="ml-6 font-bold mt-1">CSS</h1>
            </div>
            <div>
            <div className="radial-progress text-orange-600 " style={{"--value":70}} role="progressbar">70%</div>
            <h1 className="ml-4 font-bold mt-1">REACT</h1>
            </div>
            <div>
            <div className="radial-progress text-orange-600 " style={{"--value":50}} role="progressbar">50%</div>
            <h1 className="ml-4 font-bold mt-1">NODE.JS</h1>
            </div>
            <div>
            <div className="radial-progress text-orange-600 " style={{"--value":50}} role="progressbar">50%</div>
            <h1 className="font-bold mt-1">EXPRESS.JS</h1>
            </div>
            <div>
            <div className="radial-progress text-orange-600 " style={{"--value":60}} role="progressbar">60%</div>
            <h1 className=" font-bold mt-1">MONGODB</h1>
            </div>
            <div>
            <div className="radial-progress text-orange-600 " style={{"--value":80}} role="progressbar">80%</div>
            <h1 className=" font-bold mt-1">TAILWIND</h1>
            </div>
            

            </div>
        </div>
    );
};

export default Skill;