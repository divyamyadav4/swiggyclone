
export default function Restcard({restinfo})
{
    return(
        <div className="max-w-[280px]">
         <div  className="relative transform transition duration-100 hover:scale-95"> 
         <img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restinfo.info.cloudinaryImageId}></img>
         <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t h-20 from-black to transparnet"></div>
         <h1 className="absolute bottom-2 left-2 text-xl text-white font-bold" >{restinfo?.info?.aggregatedDiscountInfoV3?.header} {restinfo?.info?.aggregatedDiscountInfoV3?.subHeader?" " + restinfo?.info?.aggregatedDiscountInfoV3?.subHeader: "" }</h1>
        </div> 
        <h2 className="text-xl font-bold">{restinfo.info.name}</h2>
        <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="w-4 h-4 inline-block mr-1"
         >
         <circle cx="10" cy="10" r="10" fill="#218838" />
         <path
         d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
         fill="white"
         />
        </svg>
        <h2 className="ml-1 mr-2">{restinfo.info.avgRating}</h2>
        <h2 className="font-semibold">{restinfo.info.sla.slaString}</h2>
        </div>
        <h2 className="text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">{restinfo.info.cuisines.join(", ")}</h2>
        <h2 className="text-gray-600">{restinfo.info.locality}</h2>
        </div>
    )
}