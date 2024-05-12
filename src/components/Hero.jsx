const heroBg = "https://tinyurl.com/57wj3sn9";

const Hero = () => {
     return (
          <>
               <div id="home" className="h-screen w-full">
                    <img src={heroBg} alt="bg cover" className="w-full h-full" />
                    <div className="center w-4/5 md:w-1/2 flex flex-col gap-3 text-white font-Poppins bg-opacity-60 backdrop-filter backdrop-blur-md p-10 rounded-md">
                         <h1 className="text-2xl md:text-4xl lg:text-5xl font-GreatVibes">Learners Anchor</h1>
                         <p className="text-xs md:text-base">An educational platform that offers a wide range of online courses,  tutoring services, learning resources, and community engagement opportunities. </p>
                         <button type="btn" className="bg-fuchsia-900 hover:bg-fuchsia-700 w-fit px-10 py-2 rounded-md text-base capitalize">Let get you started</button>
                    </div>
               </div>
          </>
     )
}

export default Hero;