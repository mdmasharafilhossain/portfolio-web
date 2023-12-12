import AboutMe from "../AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Skill from "./Skill/Skill";



const Home = () => {
    return (
        <div className="mt-16">
            <Header></Header>
            <Navbar></Navbar>
            <AboutMe></AboutMe>
            <Skill></Skill>
            <Experience></Experience>
        </div>
    );
};

export default Home;