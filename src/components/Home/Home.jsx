import AboutMe from "../AboutMe/AboutMe";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";



const Home = () => {
    return (
        <div className="mt-32">
            <Header></Header>
            <Navbar></Navbar>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;