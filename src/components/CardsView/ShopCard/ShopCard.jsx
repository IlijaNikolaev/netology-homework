import AddToCartBtn from "../../AddToCartBtn/AddToCartBtn";

const ShopCard = ({item}) => {
  let {name, img, color, price} = item
  return (
    <div className="d-flex flex-wrap m-2 p-3 my-5" style={{background: 'whitesmoke', width: '30%'}}>
      <p className="w-100 text-center h5">{name}</p>
      <p className="text-center w-100">{color}</p>
      <img className="mw-100 m-auto" src={img} alt=""/>
      <div className="d-flex align-items-center justify-content-between w-100 mt-3">
        <p className="m-0" style={{color:'orangered'}}>${price}</p>
        <AddToCartBtn></AddToCartBtn>
      </div>
    </div>
  )
}
export default ShopCard