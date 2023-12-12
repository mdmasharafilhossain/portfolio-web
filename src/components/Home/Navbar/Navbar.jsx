import banner from '../../../assets/banner2.jpg'
import { useTypewriter  } from 'react-simple-typewriter';
const Navbar = () => {
    const [typeEffect] = useTypewriter({
        words: ['Web Developer', 'Learner', 'Student'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
      });
    
    
    return (
        <div>

           <div className="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
  <div className="hero-overlay  bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 id='typewriter' className="mb-5 text-5xl font-bold">I'am Mohammad Mashrafil Hossain Mahi</h1>
      <p className="mb-5 text-5xl font-bold">I'am a <span className='text-orange-600 border-b-2 border-orange-600'>{typeEffect}</span></p>
     
      <button className="btn mt-10 bg-orange-700 text-white text-xl font-bold py-2 px-4">Hire Me</button>
      
    </div>
  </div>
</div> 
   
        </div>
    );
};

export default Navbar;