import banner from '../../../assets/banner2.jpg'

const Navbar = () => {
    return (
        <div>
           <div className="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
  <div className="hero-overlay  bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">I'am Mohammad Mashrafil Hossain Mahi</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
      
    </div>
  </div>
</div> 

        </div>
    );
};

export default Navbar;