import {dineoutRestaurants} from "../utils/DineData"
import Dinecard from "./Dinecard"
export default function Dineoption()
{
    return(
        
        <div className="w-[80%] mx-auto mt-20 mb-40">
             <p className="text-3xl font-bold">Discover best restaurants on Dineout</p>
             <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4">
                {
                    dineoutRestaurants.map((restdata)=><Dinecard key={restdata?.info?.id} restdata={restdata}></Dinecard>)
                }
             </div>
        </div>
        
    )
}