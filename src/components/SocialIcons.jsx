import { Link } from "react-router-dom";
import { socials } from "../constants";

const SocialIcons = () => {
     return (
          <>
               <div className="flex gap-4">
                    {socials.map(({ id, icon: IconComponent, link }) => {
                         return (
                              <div key={id} className="flex">
                                   <Link to={link} target="_blank">
                                        <IconComponent className="w-[50px] h-[50px] rounded-full border p-3" />
                                   </Link>
                              </div>
                         );
                    })}
               </div>
          </>
     )
}

export default SocialIcons;
