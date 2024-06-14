import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer"

const Body = () => {

    const [listOfRes,setListOfRes] = useState([]);

    useEffect(() => {
        fetchData();
    },[])
    
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.637278&lng=77.2259488&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);    
    }
    
    const buttonOnClick = () =>{
        const tempList = listOfRes.filter( (listOfRes) => listOfRes.info.avgRating > 4.2);
        // console.log(tempList);
        setListOfRes(tempList);
    }
    
    return listOfRes.length === 0 ? <Shimmer /> :
    (
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