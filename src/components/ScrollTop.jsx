import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
     const scrollToTop = () => {
          window.scrollTo({
               top: 0,
               behavior: "smooth",
          });
     };
     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     return (
          <>
               <div className="fixed bottom-4 right-4 p-4 bg-fuchsia-950 text-white rounded-full block animate-pulse"
                    onClick={scrollToTop}>
                    <FaArrowUp />
               </div>
          </>
     );
};

export default ScrollTop;