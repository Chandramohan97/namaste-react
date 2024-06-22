
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer"

const Body = () => {

    const [listOfRes,setListOfRes] = useState([]);
    const [filteredListOfRes,setFilteredListOfRes] = useState([]);
    const [searchVal,setSearchVal] = useState("");

    
    useEffect(() => {
        fetchData();
    },[])
    
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.637278&lng=77.2259488&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
        setFilteredListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    const buttonOnClick = () =>{
        const tempList = listOfRes.filter( (listOfRes) => listOfRes.info.avgRating > 4.2);
        setFilteredListOfRes(tempList);
    }
    
    return filteredListOfRes.length === 0 ? <Shimmer /> :
    (
        <div className="body">
            <input className="search" type="text" value={searchVal}
             onChange={(e) => {
                setSearchVal(e.target.value);
            }}></input>
            <button onClick={() => {
                const searchList = listOfRes.filter((res) => res?.info?.name.toLowerCase().includes(searchVal.toLowerCase().trim()))
                // console.log(searchList);
                setFilteredListOfRes(searchList);
            }}>Search</button>
            {/* <button onClick={buttonOnClick}>Top Rated Restaurant</button> */}
            <div className="res-container">
            {
                filteredListOfRes.map( res => (
                    <RestaurantCard key={res.info.id} resData={res} />
                ))
            }
            </div>
        </div>
    )
}

export default Body;