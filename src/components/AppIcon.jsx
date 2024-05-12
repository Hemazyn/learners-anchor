import { icon } from "../assets";
const AppIcon = () => {
     return (
          <>
               <div className="flex flex-row gap-3 items-center cursor-pointer">
                    <img src={icon} alt="icon" className="h-10 w-10 rounded-md" />
                    <span className="text-3xl font-GreatVibes">Learners Anchor</span>
               </div>
          </>
     )
}

export default AppIcon;