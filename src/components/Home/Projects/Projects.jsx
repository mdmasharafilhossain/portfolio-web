import newspaper from '../../../assets/news_paper.png'
import travel from '../../../assets/tour_and_travel.png'
import tech from '../../../assets/techLand.png'
import { SlControlForward } from "react-icons/sl";
import html from '../../../assets/html5.svg'
import css3 from '../../../assets/css3.svg'
import node from '../../../assets/node.svg'
import react from '../../../assets/react.svg'
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <div id="projects" className="mt-28 container mx-auto mb-10">
            <h2 className="text-5xl font-bold border-l-4 pl-4 border-orange-600">My Projects</h2>
             <div className="mt-20">
               {/* 1 */}
               <div className="flex flex-col md:flex-col lg:flex-row gap-20">
                  <div >
                    <img className='w-[700px] border-2 border-orange-600 shadow-xl' src={newspaper} alt="" />
                  </div>
                  <div className='flex-1'>

                  <div className='flex  gap-2 text-3xl'>
                      <span className='mt-1'><SlControlForward  className='text-orange-600'/></span>
                      <h1 className=' font-bold'>Newspaper Website</h1>
                  </div>
                  <h2 className='ml-10 text-xl text-justify mt-2'>This is newspaper website. User can see news of all over the world. User can also see premium article after taking subscription. User also add article if he/she wish. User also see all of the user number.This Project has also Admin panel option.Admin can see the statistics of All Publisher Number.Also see all Users list and Admin can make anyone admin.Admin also Add publisher,approve article and many more.</h2>
                  <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-20 mt-5 ml-10 text-2xl'>
                    <img className='w-10' src={html} alt="" />
                    <img className='w-12' src={css3} alt="" />
                    <SiTailwindcss className='text-6xl'/>
                    <FaReact className='text-5xl'/>
                    <img className='w-24' src={node} alt="" />
                    <SiMongodb className='text-5xl'/>
                  </div>
                  <div className='flex md:gap-16 lg:justify-between mt-3'>
                    <div className='flex text-orange-600 gap-1 text-2xl p-1 ml-10 font-bold'>
                    <h1 className='mt-1'><MdLiveTv /></h1>
                    <a href='https://newspaper-d448d.web.app/'>live Site</a>
                    </div>
                    <div className='flex  text-orange-600  gap-1 text-2xl p-1 ml-10 font-bold'>
                    <h1 className='mt-1'><FaGithub /></h1>
                    <a href=' https://github.com/mdmasharafilhossain/newspaper-website'>Client Side</a>
                    </div>
                    <div className='flex  text-orange-600 gap-1 text-2xl p-1 ml-10 font-bold'>
                    <h1 className='mt-1'><FaGithub /></h1>
                    <a href='https://github.com/mdmasharafilhossain/newspaper-website-server'>Server Side</a>
                    </div>
                  </div>
                  </div>
                  
               </div>
               {/* 2 */}
               <div className="flex mt-20 flex-col md:flex-col lg:flex-row gap-20">
                  <div >
                    <img className='w-[700px] border-2 border-orange-600 shadow-xl' src={travel} alt="" />
                  </div>
                  <div className='flex-1 mt-3'>

                  <div className='flex  gap-2 text-3xl'>
                      <span className='mt-1'><SlControlForward  className='text-orange-600'/></span>
                      <h1 className=' font-bold'>Tour and Travel Website</h1>
                  </div>
                  <h2 className='ml-10 text-xl text-justify mt-2'>This is Travel website .If User can travel any of the Bangladesh he can do it using this website. User can full details of the place. User can also see our guides. User can book place where he/she wish to travel. User also see details.User can also see his/her bookings.</h2>
                  <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-20 mt-10 ml-10 text-2xl'>
                    <img className='w-10' src={html} alt="" />
                    <img className='w-12' src={css3} alt="" />
                    <SiTailwindcss className='text-6xl'/>
                    <FaReact className='text-5xl'/>
                    <img className='w-24' src={node} alt="" />
                    <SiMongodb className='text-5xl'/>
                  </div>
                  <div className='flex md:gap-16 lg:justify-between mt-5'>
                    <div className='flex text-orange-600 gap-1 text-2xl p-1 ml-10 font-bold'>
                    <h1 className='mt-1'><MdLiveTv /></h1>
                    <a href='https://travel-and-tour-86fbe.web.app/'>live Site</a>
                    </div>
                    <div className='flex  text-orange-600  gap-1 text-2xl p-1 ml-10 font-bold'>
                    <h1 className='mt-1'><FaGithub /></h1>
                    <a href='https://github.com/mdmasharafilhossain/tour-and-travel-client'>Client Side</a>
                    </div>
                    <div className='flex  text-orange-600 gap-1 text-2xl p-1 ml-10 font-bold'>
                    <h1 className='mt-1'><FaGithub /></h1>
                    <a href='https://github.com/mdmasharafilhossain/tour-and-travel-server'>Server Side</a>
                    </div>
                  </div>
                  </div>
                  
               </div>
               {/* 3 */}
               <div className="flex mt-20 flex-col md:flex-col lg:flex-row gap-20">
                  <div >
                    <img className='w-[700px] border-2 border-orange-600 shadow-xl' src={tech} alt="" />
                  </div>
                  <div className='flex-1 mt-3'>

                  <div className='flex  gap-2 text-3xl'>
                      <span className='mt-1'><SlControlForward  className='text-orange-600'/></span>
                      <h1 className=' font-bold'>Tech Shop Website</h1>
                  </div>
                  <h2 className='ml-10 text-xl text-justify mt-2'>This is Tech Shop website. User can buy many smart things here like computer, phone , smart watch. user also see his/her bookings. User can see full details of those things before buying .User also see our customer review</h2>
                  <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-20 mt-10 ml-10 text-2xl'>
                    <img className='w-10' src={html} alt="" />
                    <img className='w-12' src={css3} alt="" />
                    <SiTailwindcss className='text-6xl'/>
                    <FaReact className='text-5xl'/>
                    <img className='w-24' src={node} alt="" />
                    <SiMongodb className='text-5xl'/>
                  </div>
                  <div className='flex md:gap-16 lg:justify-between mt-7'>
                    <div className='flex text-orange-600 gap-1 text-2xl p-1 ml-10 font-bold'>
                    <h1 className='mt-1'><MdLiveTv /></h1>
                    <a href='https://brand-shop-a6c5c.web.app'>live Site</a>
                    </div>
                    <div className='flex  text-orange-600  gap-1 text-2xl p-1 ml-10 font-bold'>
                    <h1 className='mt-1'><FaGithub /></h1>
                    <a href=' https://github.com/mdmasharafilhossain/tech-shop-web'>Client Side</a>
                    </div>
                    <div className='flex  text-orange-600 gap-1 text-2xl p-1 ml-10 font-bold'>
                    <h1 className='mt-1'><FaGithub /></h1>
                    <a href='https://github.com/mdmasharafilhossain/tech-shop-web-server'>Server Side</a>
                    </div>
                  </div>
                  </div>
                  
               </div>



             </div>
        </div>
    );
};

export default Projects;