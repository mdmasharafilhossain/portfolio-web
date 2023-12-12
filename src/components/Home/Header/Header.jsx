
import logo from '../../../assets/Screenshot (1216).png'
const Header = () => {
    const NavLinks = <>
    <li><a
             style={{ fontWeight: "bold", fontSize: "22px", }}
        
        >
            Home
        </a></li>
        <li className=''><a
             
             href="#about"
             style={{ fontWeight: "bold", fontSize: "22px", }}
            
        >
           About Us
        </a></li>
    
    
    </>
    return (
        <div>
           <div className='shadow-lg  bg-base-100 fixed top-0 left-0 right-0 z-50'>
                <div className="navbar bg-base-100 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                             {NavLinks}
                            </ul>
                        </div>
                        <img className='w-96' src={logo} alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {NavLinks}
                        </ul>
                    </div>
                    <div className="navbar-end flex lg:mr-10 lg:space-x-2">
                    
                        
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;