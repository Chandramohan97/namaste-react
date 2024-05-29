import React from "react";
import ReactDOM from "react-dom/client";

// console.log(heading);

const Header = () =>{
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg' alt="Food Logo" />
            </div>
            <div className='nav-item'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () =>{
    return(
        <div className='res-card'>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/e0vvulfbahjxjz6k4uwi" 
            alt="res-logo" 
            className='res-logo'
            />
            <h3>Meghana Foods</h3>
            <h4>Birayani, North Indian, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 mins ETA</h4>
        </div>
    )
}
const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)

// root.render(reactElement)


