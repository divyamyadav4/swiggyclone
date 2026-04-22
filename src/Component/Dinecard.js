
export default function Dinecard({restdata})
{
   return(
    <div className="max-w-sm flex-none">
        <div className="relative">
            <a target="_blank" href={restdata?.cta?.link}>
            <img className="h-48 w-82 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restdata?.info?.mediaFiles[0]?.url}></img>
            </a>
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t h-20 from-black to transparnet"></div>
            <p className="absolute bottom-2 left-2 text-1xl text-white font-bold" >{restdata?.info?.name}</p>
            <p className="absolute bottom-2 right-2 text-1xl text-white font-bold" >{restdata?.info?.rating?.value}</p>
             
        </div>
    </div>
   )
}