import { Link } from "react-router"
export default function Header()
{
return(
    <>
    <header className="bg-gradient-to-r from-[#00FFA3] via-[#DC1FFF] to-[#00B8FF] font-serif text-white">
        {/* Top Logo wala section */}
        <div className="flex justify-between py-8 container mx-auto px-16 ">
           <h1 className="text-4xl font-bold text-white tracking-wide">
  Gourmet Table
</h1>


           <div className=" font-bold text-base flex gap-15 items-center ">
           <a href="https://www.swiggy.com/">Swiggy Corporate</a>
           <a href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
           <a href="" className="border border-white px-4 py-3 rounded-2xl ">Get the app</a>
           <a href="" className="bg-black border-black px-4 py-3 rounded-2xl">Sign in</a>
           </div>
        </div>
        {/* middle wala location and search wala section */}
        <div className="relative pt-6 pb-8">
            <img className="h-110 w-60 absolute left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
            <img className="h-110 w-60 absolute right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
            <div className="max-w-[60%] text-4xl font-bold text-center container mx-auto ">
                Order food & groceries. Discover best restaurants. Swiggy it!
            </div>
            <div className="max-w-[60%] container flex gap-10 mt-5 mx-auto">
               <input className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl border-black-300 text-black" type="text" placeholder="Enter your delivery location" ></input> 
               <input className="bg-white w-[60%] text-xl px-6 py-4 rounded-2xl  text-black" type="text" placeholder="Search for restaurant, item or more"></input>
            </div>
        </div> 
        {/* last section of header */}
        <div className="max-w-[70%] conatainer mx-auto flex ">
             <Link to="/restaurant">
            <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
            </Link>
            <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
            <img   src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img></a>
            <a href="https://www.swiggy.com/dineout">
            <img   src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img></a>
        </div>
    </header>
    </>
)
}