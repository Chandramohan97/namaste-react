import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            {
                resList.map( resList => (
                    <RestaurantCard key={resList.info.id} resData={resList} />
                ))
            }
            </div>
        </div>
    )
}

export default Body;