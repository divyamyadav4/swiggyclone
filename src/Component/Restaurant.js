import { use, useEffect, useState } from "react";
import Restcard from "./RestCard";
import Shimmer from "./shimmer";
export default function Resaurant()
{
    const[Restdata , setRestdata] = useState([])

    useEffect(()=>{

      async function fetchdata() {
    //   const proxyserver = "https://cors-anywhere.herokuapp.com/"
      const proxyserver = "http://localhost:8080/";
      const swiggyapi = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
      const response = await fetch(proxyserver+swiggyapi);
      if(!response.ok)
      {
         throw new Error("HTTP error " + response.status);
      }
      const data = await response.json();
      console.log(" Swiggy Data Recived :", data);
      setRestdata(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    fetchdata();
    },[]) 

   // shimmer effect 
   if(Restdata.length==0)
   {
     return <Shimmer></Shimmer>;
   }

    return(
      <div className="flex flex-wrap w-[80%] mx-auto  mt-20 mb-40 gap-5">
           {
           Restdata.map((restinfo)=><Restcard key={restinfo.info.id} restinfo={restinfo}></Restcard>)
           }
      </div>
    )

}