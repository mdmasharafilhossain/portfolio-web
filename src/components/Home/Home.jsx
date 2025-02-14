import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import Skill from "./Skill/Skill";




const Home = () => {
    return (
        <div className="mt-16 ">
             <Header></Header>
            <Navbar></Navbar>
           <div className=" mx-4 md:mx-5 lg:mx-0">
           <AboutMe></AboutMe>
            <Skill></Skill>
            <Experience></Experience>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Home;