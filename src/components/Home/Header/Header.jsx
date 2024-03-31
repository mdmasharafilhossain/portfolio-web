import profile from '../../../assets/rsz_finalfjh.png'
import logo from '../../../assets/Screenshot (1216).png'
import { HiOutlineBars3 } from "react-icons/hi2";
const Header = () => {
    const NavLinks = <>
    <li><a className='text-orange-700'
             style={{ fontWeight: "bold", fontSize: "22px", }}
        
        >
            Home
        </a></li>
        <li ><a className='text-orange-700'
             
             href="#about"
             style={{ fontWeight: "bold", fontSize: "22px", }}
            
        >
           About 
        </a></li>
        <li className='text-orange-700'><a
             
             href="#skill"
             style={{ fontWeight: "bold", fontSize: "22px", }}
            
        >
           Skill
        </a></li>
        <li className='text-orange-700'><a
             
             href="#exp"
             style={{ fontWeight: "bold", fontSize: "22px", }}
            
        >
           Experience
        </a></li>
        <li className='text-orange-700'><a
             
             href="#edu"
             style={{ fontWeight: "bold", fontSize: "22px", }}
            
        >
           Education
        </a></li>
        <li className='text-orange-700'><a
             
             href="#projects"
             style={{ fontWeight: "bold", fontSize: "22px", }}
            
        >
           Projects
        </a></li>
        <li className='text-orange-700'><a
             
             href="#contact"
             style={{ fontWeight: "bold", fontSize: "22px", }}
            
        >
           Contact
        </a></li>
    
    
    </>
    return (
        <div>
           <div className='shadow-lg  bg-base-100 fixed top-0 left-0 right-0 z-50'>
                <div className="navbar bg-base-100 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <HiOutlineBars3 className='text-2xl'/>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52">
                             {NavLinks}
                            </ul>
                        </div>
                        <img className='w-96 ml-10  md:ml-24 lg:ml-5' src={logo} alt="" />
                    </div>
                    <div className="navbar-center  lg:ml-40  hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {NavLinks}
                        </ul>
                    </div>
                    <div className="navbar-end flex lg:mr-10 lg:space-x-2">
                    <img className='w-16 border-2 border-orange-600 rounded-full' src={profile} alt="" />
                        
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;