import './index.scss'
import AddToCartBtn from "../../AddToCartBtn/AddToCartBtn";

const ShopItem = ({item}) => {
  let {name, img, color, price} = item

  return (
    <div className="list-item d-flex justify-content-between align-items-center w-100">
      <img className="list-item__image" src={img} alt=""/>
      <p className="h2">{name}</p>
      <p>{color}</p>
      <p className="list-item__price">${price}</p>
      <AddToCartBtn></AddToCartBtn>
    </div>
  )
}
export default ShopItem