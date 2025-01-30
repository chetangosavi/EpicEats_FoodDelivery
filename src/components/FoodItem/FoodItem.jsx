import { useState } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css"
const FoodItem =({id,name,price,description,image})=>{
    console.log({id})
    const [itemCount, setItemCount] = useState(0);
    return(
        <div className="food-item">
            <div className="food-item-image-container">
                <img className="food-item-image" src={image} alt={name} />
                {
                    !itemCount?<img className="add" onClick={()=>setItemCount((prev)=>prev+1)} src={assets.add_icon_white} alt=""/>:<div>me</div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-description">
                    {description}
                </p>
                <p className="food-item-price">
                    ${price}
                </p>
            </div>
            
        </div>
    )
}

export default FoodItem;