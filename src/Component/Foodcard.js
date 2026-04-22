
export default function Foodcard({fooddata})
{
    return(
        <>
        <a href={fooddata.action.link}>
        <img className="w-40 h-50 object-cover gap-5" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+fooddata.imageId}></img>
        </a>
        </>
    )
}