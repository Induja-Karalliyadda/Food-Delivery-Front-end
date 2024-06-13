import { assets } from '../../assets/assets'
import './FoodItem.css'

function FoodItem({id,name,price,description,image}) {
  return (
    <div className='food-itam'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>  
                <div className="food-item-price">${price}</div>
        </div>
        </div>
  )
}

export default FoodItem