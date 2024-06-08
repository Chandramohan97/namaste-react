import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";


const Body = () => {
    
    // console.log(resList);
    const [listOfRes,setListOfRes] = useState(resList);

    const buttonOnClick = () =>{
        const tempList = listOfRes.filter( (listOfRes) => listOfRes.info.avgRating > 4.2);
        // console.log(tempList);
        setListOfRes(tempList);
    }
    
    return(
        <div className="body">
            <button onClick={buttonOnClick}>Top Rated Restaurant</button>
            <div className="res-container">
            {
                listOfRes.map( listOfRes => (
                    <RestaurantCard key={listOfRes.info.id} resData={listOfRes} />
                ))
            }
            </div>
        </div>
    )
}

export default Body;