import { Link } from "react-router-dom";
import { FAQ, Footer, Hero, Header, ScrollTop } from "../components";
import { services, expertise } from "../constants";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
     return (
          <>
               <Header />
               <Hero />
               {/* section about */}
               <div id="about" className="w-full flex justify-center items-center bg-gray-300">
                    <div className="w-5/6 flex flex-col md:flex-row text-center gap-5 py-5 md:py-10 font-Poppins">
                         <div className="w-full md:w-1/2 flex flex-col">
                              <h2 className="text-lg md:text-3xl font-semibold text-gray-800">Who We Are</h2>
                              <p className="text-xs md:text-base text-gray-500">We are a dedicated team of passionate individuals who believe in the power of education to transform lives and shape a better future. We are committed to providing high-quality learning resources and services that empower learners of all ages and backgrounds to reach their full potential.</p>
                         </div>
                         <div className="w-full md:w-1/2 flex flex-col">
                              <h2 className="text-lg md:text-3xl font-semibold text-gray-800">Our Mission</h2>
                              <p className="text-xs md:text-base text-gray-500"> At Learners Anchor, our mission is to make education accessible, engaging, and effective for everyone. We strive to create a platform that fosters a love for learning, encourages critical thinking, and equips learners with the skills they need to thrive in an ever-evolving world. We aim to bridge gaps in education and empower individuals to pursue their educational goals and aspirations</p>
                         </div>
                    </div>
               </div>
               {/* section service */}
               <div id="service" className="w-full flex justify-center items-center bg-white">
                    <div className="w-4/5 flex flex-col text-center gap-3 py-10 font-Poppins">
                         <h2 className="text-3xl font-semibold text-gray-800">Service We Offer</h2>
                         <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-3" >
                              {/* <div className="flex flex-col md:flex-row gap-3" > */}
                              {services.map(({ id, icon, head, text }) => {
                                   return (
                                        <div key={id} className="flex flex-col gap-3">
                                             <div className="relative h-[300px] flex flex-col rounded-lg">
                                                  <img src={icon} alt={head} className="h-full rounded-md" />
                                                  <h3 className="absolute bottom-0 w-full py-2 bg-opacity-60 backdrop-filter backdrop-blur-md text-white animate-pulse cursor-pointer hover:bg-fuchsia-900">{head}</h3>
                                             </div>
                                             <p className="text-sm">{text}</p>
                                        </div>
                                   );
                              })}
                         </div>
                    </div>
               </div>
               <hr />
               {/* section why choose us */}
               <div className="w-full flex justify-center items-center bg-white">
                    <div className="w-4/5 flex flex-col text-center gap-3 py-10 font-Poppins">
                         <h2 className="text-3xl font-semibold text-gray-800">Why Choose us</h2>
                         <p>Choosing Learners Anchor means choosing excellence in education. Here is why learners and educators trust us</p>
                         <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-3" >
                              {expertise.map(({ id, icon, head, text }) => {
                                   return (
                                        <div key={id} className="flex flex-col gap-3">
                                             <div className="relative h-[300px] flex flex-col rounded-lg">
                                                  <img src={icon} alt={head} className="h-full rounded-md" />
                                                  <h3 className="absolute bottom-0 w-full py-2 bg-opacity-60 backdrop-filter backdrop-blur-md text-white animate-pulse cursor-pointer hover:bg-fuchsia-900">{head}</h3>
                                             </div>
                                             <p className="text-sm text-justify">{text}</p>
                                        </div>
                                   );
                              })}
                         </div>
                    </div>
               </div>
               {/* section join-us */}
               <div className="w-full flex justify-center items-center bg-gray-300">
                    <div className="w-4/5 flex flex-col text-center gap-5 py-5 md:py-10 font-Poppins">
                         <div className="w-full mx-auto flex flex-col">
                              <h2 className="text-lg md:text-3xl font-semibold text-gray-800">Join Us</h2>
                              <p className="text-xs md:text-base text-gray-500">We invite you to join our educational community and embark on a transformative learning journey. Whether you are a student seeking to expand your knowledge, a professional looking to enhance your skills, or an educator searching for resources, we have something valuable to offer you. Together, let us unlock the power of education and shape a brighter future.</p>
                         </div>
                         <Link to="" className="flex items-center gap-2 justify-end text-fuchsia-950">
                              <span className="text-xs">Start exploring our services today and unleash your full potential with Learners Anchor.</span>
                              <FaArrowRight size={10} className="animate-pulse" />
                         </Link>
                    </div>
               </div>
               <hr />
               <FAQ />
               <hr />
               <Footer />
               <ScrollTop />
          </>
     )
}

export default Home;