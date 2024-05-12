import { useState } from "react";
import { Link } from "react-router-dom";
import AppIcon from "./AppIcon";
import { BsFillTelephoneFill, BsEnvelopeFill, BsWhatsapp } from "react-icons/bs";
import { SocialIcons, TextInput } from "../components";
import Notiflix from "notiflix";

const Footer = () => {
     const [email, setEmail] = useState("");
     const [emailError, setEmailError] = useState("");

     const handleEmailChange = (e) => {
          setEmail(e.target.value);
          setEmailError("");
     };

     const handleEmailSubmit = () => {
          if (!email || !email.trim()) {
               setEmailError("Email is required");
               return;
          }
          if (!/\S+@\S+\.\S+/.test(email)) {
               setEmailError("Please enter a valid email address");
               return;
          }
          Notiflix.Notify.success("Email submitted successfully");
          setEmail("");
     };

     return (
          <>
               <div className="w-full bg-fuchsia-800 text-white">
                    <div className="w-4/5 mx-auto flex flex-col md:flex-row gap-5 py-5">
                         <div className="w-full md:w-3/5 flex">
                              <div className="flex flex-col gap-3">
                                   <AppIcon />
                                   <p className="font-Poppins text-xs md:text-sm text-gray-300">We are a dedicated team of passionate individuals who believe in the power of education to transform lives and shape a better future. We are committed to providing high-quality learning resources and services that empower learners of all ages and backgrounds to reach their full potential. <br /> At Learners Anchor, our mission is to make education accessible, engaging, and effective for everyone. We strive to create a platform that fosters a love for learning, encourages critical thinking, and equips learners with the skills they need to thrive in an ever-evolving world. We aim to bridge gaps in education and empower individuals to pursue their educational goals and aspirations</p>
                              </div>
                         </div>
                         <div className="w-full md:w-2/5 flex flex-col justify-between gap-3">
                              <div className="flex flex-col items-center gap-2 justify-between">
                                   <Link to="#" target="_blank" className="flex flex-row items-center gap-1 h-fit cursor-pointer">
                                        <BsFillTelephoneFill /> <span>+2349019487450</span>
                                   </Link>
                                   <Link to="#" target="_blank" className="flex flex-row items-center gap-1 h-fit cursor-pointer">
                                        <BsEnvelopeFill /> <span>hemazyn@gmail.com</span>
                                   </Link>
                                   <Link to="#" target="_blank" className="flex flex-row items-center gap-1 h-fit cursor-pointer">
                                        <BsWhatsapp /> <span>Chat us on Whatsapp</span>
                                   </Link>
                              </div>
                              <div className="flex flex-col relative">
                                   <div className="flex flex-col w-full">
                                        <TextInput type="email" name="email" placeholder="Subscribe to our Newsletter"
                                             value={email} onChange={handleEmailChange}
                                             className="relative w-full flex items-center p-3 text-fuchsia-900 border border-gray-300 rounded-sm shadow-sm focus:outline-none border-none outline-none text-base placeholder:text-fuchsia-900" />
                                        <button onClick={handleEmailSubmit} className="absolute right-2 top-[6px] flex items-center rounded-[3px] p-2 text-sm bg-fuchsia-900 text-white">
                                             Subscribe
                                        </button>
                                   </div>
                                   {emailError && <span className="text-red-500 text-xs mt-1 text-end">{emailError}</span>}
                              </div>
                              <div className="flex flex-col gap-2">
                                   <h3 className="font-GreatVibes text-3xl text-center">Social Link</h3>
                                   <div className="w-full flex flex-row justify-center">
                                        <SocialIcons />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Footer;
