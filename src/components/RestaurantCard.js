import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({resData}) =>{
    
    const {name,cuisines,avgRating,locality,costForTwo,cloudinaryImageId} = resData?.info;
    // console.log(resData);
    return(
        <div className='res-card'>
            <img src={CDN_URL.concat(resData?.info?.cloudinaryImageId)}
            alt="res-logo" 
            className='res-logo'
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating + " stars"}</h4>
            <h4>{locality}</h4>
            <h4>{costForTwo}</h4>
        
        </div>
    )
}

export default RestaurantCard;