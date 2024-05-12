import { useState, useEffect } from "react";
import { BsListNested, BsX } from "react-icons/bs";
import { AppIcon } from "../components";
import { navItems } from "../constants";

const Header = () => {
     const [nav, setNav] = useState(false);
     const [selectedLink, setSelectedLink] = useState("home");
     const [scrolled, setScrolled] = useState(false);

     const closeNavOnLargeScreen = () => {
          if (window.innerWidth >= 768) {
               setNav(false);
          }
     };

     const scrollToSection = (id) => {
          const element = document.getElementById(id);
          if (element) {
               element.scrollIntoView({ behavior: "smooth", block: "center" });
               setSelectedLink(id);
          }
     };

     const handleNavItemClick = (id) => {
          closeNavOnLargeScreen();
          scrollToSection(id);
     };

     useEffect(() => {
          const handleScroll = () => {
               const isScrolled = window.scrollY > 0;
               setScrolled(isScrolled);

               const sections = document.querySelectorAll("section[id]");
               let currentSectionId = "home";
               const scrollPosition = window.scrollY + 150;

               sections.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    const sectionId = section.getAttribute("id");

                    if (scrollPosition >= sectionTop) {
                         currentSectionId = sectionId;
                    }
               });

               setSelectedLink(currentSectionId);
          };

          window.addEventListener("scroll", handleScroll);
          handleScroll();
          return () => {
               window.removeEventListener("scroll", handleScroll);
          };
     }, []);

     return (
          <div className={`fixed w-full flex justify-between items-center px-[5%] py-2 md:py-3 text-white bg-opacity-60 backdrop-filter backdrop-blur-md z-50 ${scrolled ? "bg-fuchsia-950" : ""}`} >
               <div className=" lg:block">
                    <AppIcon />
               </div>
               <ul className="w-1/2 hidden md:flex lg:flex justify-between animate__animated animate__slideInRight animate__slower">
                    {navItems.map(({ id, label, path }) => (
                         <li key={id} className={`md:px-3 lg:px-4 text-sm md:text-base cursor-pointer capitalize font-roboto font-medium hover:text-fuchsia-900 hover:underline duration-200 ${selectedLink === path ? "text-fuchsia-900" : ""}`} >
                              <button onClick={() => { handleNavItemClick(path); }} style={{ background: "transparent", border: "none", outline: "none" }}  >
                                   {label}
                              </button>
                         </li>
                    ))}
               </ul>
               <div onClick={() => setNav(!nav)} className="cursor-pointer z-50 md:hidden">
                    {nav ? (
                         <BsX size={30} className="font-bold text-white" style={{ fontWeight: "lighter" }} />
                    ) : (
                         <BsListNested size={25} style={{ fontWeight: "lighter" }} className="font-thin" />
                    )}
               </div>
               {nav && (
                    <ul className="flex flex-col justify-between items-start absolute top-0 right-0 w-2/4 py-10 text-neutral-900 font-roboto bg-fuchsia-900 z-40  animate__animated animate__slideInRight animate__slower">
                         {navItems.map(({ id, label, path }) => (
                              <li key={id} className="px-4 py-2 capitalize text-sm cursor-pointer text-white">
                                   <button onClick={() => { handleNavItemClick(path); }} style={{ background: "transparent", border: "none", outline: "none" }} className={selectedLink === path ? "text-fuchsia-900" : ""} >
                                        {label}
                                   </button>
                              </li>
                         ))}
                    </ul>
               )}
          </div>
     );
};

export default Header;
