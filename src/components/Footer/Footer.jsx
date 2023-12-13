import logo from '../../assets/favicon.ico'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
           <footer className="footer footer-center p-10 border-4 border-orange-600 ">
  <aside>
    <img  className="bg-orange-600" src={logo} alt="" />
    <p className="font-bold text- text-lg text-orange-600">
    Mohammad Mashrafil Hossain Mahi
    </p> 
    <p>Copyright © 2023 - All right reserved</p>
  </aside> 
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href='https://github.com/mdmasharafilhossain'><FaGithub className='text-3xl text-orange-600'/></a>
      <a href='https://www.linkedin.com/in/mdmashrafilhossain22/'><FaLinkedin className='text-3xl text-orange-600'/></a>
      <a href='https://www.facebook.com/mdmashrafil.hossain.hima.2212'><FaFacebook className='text-3xl text-orange-600'/></a>
    </div>
  </nav>
</footer> 
        </div>
    );
};

export default Footer;