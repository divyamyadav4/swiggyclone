import {GrocerGridCard} from "../utils/Grocery"
import Grocerycard from "./Grocerycard"
export default function GroceryOption(){
    return(
       <div className="mt-20 w-[80%] container mx-auto">
        <h1 className="text-2xl font-bold">Shop on instamart</h1>
        <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-20 gap-3"> 
              {
                GrocerGridCard.map((fooddata)=><Grocerycard key={fooddata.id} fooddata={fooddata}></Grocerycard>)
              }
        </div>
        </div>
    )
}  