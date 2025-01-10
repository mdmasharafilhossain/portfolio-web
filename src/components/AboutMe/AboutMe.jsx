import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profile from '../../assets/rsz_2md_mashrafil_pic4_-_copy-removebg_ggg.png';

const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div id="about" className="mt-20 container mx-auto px-4 sm:px-6 lg:px-8">
            <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold border-l-4 pl-4 border-orange-600"
                data-aos="fade-down"
            >
                About me
            </h2>

            <div className="flex flex-col lg:flex-row lg:gap-20 mt-10 lg:mt-20">
                {/* Profile Image */}
                <div className="flex justify-center lg:justify-start" data-aos="flip-left">
                    <img
                        className="h-60 w-60 sm:h-80 sm:w-80 lg:h-[600px] lg:w-auto mb-10 border-2 shadow-xl border-orange-600 rounded-lg"
                        src={profile}
                        alt="Profile"
                    />
                </div>

                {/* Text Content */}
                <div className="flex-1 mt-2 text-center lg:text-left" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-600">
                        MERN Stack Developer
                    </h2>
                    <p className="text-sm sm:text-base lg:text-xl text-justify mt-5">
                        I'm MD Mashrafil Hossain Mahi, a junior MERN stack developer with
                        expertise in React.js, Node.js, Express.js, and MongoDB. My passion
                        lies in blending technology with creativity to craft exceptional
                        websites. I'm enthusiastic about coding and dedicated to learning
                        and growing within the dynamic world of web development. Let's
                        collaborate and bring your ideas to life!
                    </p>

                    {/* Personal Info */}
                    <div className="mt-10 space-y-4">
                        <h1 className="text-base sm:text-lg lg:text-2xl font-bold">
                            <span className="text-orange-600">NAME:</span> Mohammad Mashrafil
                            Hossain Mahi
                        </h1>
                        <h1 className="text-base sm:text-lg lg:text-2xl font-bold">
                            <span className="text-orange-600">DATE OF BIRTH:</span> 19 August
                            2000
                        </h1>
                        <h1 className="text-base sm:text-lg lg:text-2xl font-bold">
                            <span className="text-orange-600">NATIONALITY:</span> Bangladeshi
                        </h1>
                        <h1 className="text-base sm:text-lg lg:text-2xl font-bold">
                            <span className="text-orange-600">ADDRESS:</span> Rampura, Dhaka,
                            Bangladesh
                        </h1>
                        <h1 className="text-base sm:text-lg lg:text-2xl font-bold">
                            <span className="text-orange-600">PHONE:</span> +8801641749267
                        </h1>
                        <h1 className="text-base sm:text-lg lg:text-2xl font-bold">
                            <span className="text-orange-600">E-MAIL:</span>{' '}
                            mashrafilmahi007@gmail.com
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
