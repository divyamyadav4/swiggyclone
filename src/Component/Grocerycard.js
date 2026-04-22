

export default function Grocerycard({fooddata})
{
    return(
        <div className="flex-none">
        <a href={fooddata.action.link}>
        <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+fooddata.imageId}></img>
        </a>
        <h3 className="text-center font-bold">{fooddata?.action?.text}</h3>
        </div>
        
    )
}