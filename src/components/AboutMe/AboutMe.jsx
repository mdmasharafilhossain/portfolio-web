
import profile from '../../assets/rsz_2md_mashrafil_pic4_-_copy-removebg_ggg.png'


const AboutMe = () => {

   
    return (
        <div id="about" className="mt-20 container mx-auto">
            <h2 className="text-5xl font-bold border-l-4 pl-4 border-orange-600">About me</h2>

            <div className='flex flex-col lg:flex-row lg:gap-20 mt-20'>
              <div className='' data-aos="flip-left">
                 <img className='h-[600px] mb-10 border-2 border-orange-600'   src={profile} alt="" />
              </div>
              <div className='flex-1 mt-2'>
                   <h2 className='text-5xl font-bold text-orange-600'>MERN Stack Developer</h2>
                   <p className='text-xl text-justify mt-5'>I'm MD Mashrafil Hossain Mahi, a junior MERN stack developer with expertise in React.js, Node.js, Express.js, and MongoDB. My passion lies in blending technology with creativity to craft exceptional websites. I'm enthusiastic about coding and dedicated to learning and growing within the dynamic world of web development. Let's collaborate and bring your ideas to life!</p>
                   <h1 className='text-2xl font-bold mt-10'><span className='text-orange-600'>NAME:</span> Mohammad Mashrafil Hossain Mahi</h1>
                   <h1 className='text-2xl font-bold mt-5'><span className='text-orange-600'>DATE OF BIRTH:</span> 19 August 2000</h1>
                   <h1 className='text-2xl font-bold mt-5'><span className='text-orange-600'>NATIONALITY:</span> Bangladeshi</h1>
                   <h1 className='text-2xl font-bold mt-5'><span className='text-orange-600'>ADDRESS:</span> Rampura,Dhaka,Bangladesh</h1>
                   <h1 className='text-2xl font-bold mt-5'><span className='text-orange-600'>PHONE:</span> 01641749267</h1>
                   <h1 className='text-2xl font-bold mt-5'><span className='text-orange-600'>E-MAIL:</span> mashrafilmahi007@gmail.com</h1>
              </div>
            </div>
        </div>
    );
};

export default AboutMe;