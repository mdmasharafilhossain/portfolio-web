import { motion } from "framer-motion";

const skills = [
    { name: "HTML", value: 90 },
    { name: "JAVASCRIPT", value: 60 },
    { name: "CSS", value: 90 },
    { name: "REACT", value: 70 },
    { name: "NODE.JS", value: 50 },
    { name: "EXPRESS.JS", value: 50 },
    { name: "MONGODB", value: 60 },
    { name: "TAILWIND", value: 80 },
];

const Skill = () => {
    return (
        <div id="skill" className="mt-20 container mx-auto ">
            <motion.h2 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold border-l-4 pl-4 border-orange-600  md:text-left"
            >
                Skills
            </motion.h2>
            <div className="mt-20 gap-8 sm:gap-12 md:gap-16 lg:gap-24 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
                {skills.map((skill, index) => (
                    <motion.div 
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-center"
                    >
                        <div 
                            className="radial-progress text-orange-600"
                            style={{ "--value": skill.value }}
                            role="progressbar"
                        >
                            {skill.value}%
                        </div>
                        <h1 className="text-center font-bold mt-1">{skill.name}</h1>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
