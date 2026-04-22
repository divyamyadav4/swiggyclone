import {imageGridCards} from "../utils/fooddata.js"
import Foodcard from "./Foodcard.js"
export default function Foodoption()
{
    return(
        <>
         <div className="w-[80%] container mx-auto flex flex-wrap mt-20"> 
              {
                imageGridCards.map((fooddata)=><Foodcard key={fooddata.id} fooddata={fooddata}></Foodcard>)
              }
         </div> 
        </>
    )
} 