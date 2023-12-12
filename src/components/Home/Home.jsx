import AboutMe from "../AboutMe/AboutMe";
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
        </div>
    );
};

export default Home;