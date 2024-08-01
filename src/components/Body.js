import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search for restaurants" />
                <button>Search</button>
            </div>
            <div className="res-container">
                {resData.map((resData) => <RestaurantCard data={resData} />)}
            </div>
        </div>
    )
}

export default Body;