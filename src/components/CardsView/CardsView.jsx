import ShopCard from "./ShopCard/ShopCard";

const CardsView = ({cards}) => {
  return (
    <div className="cards d-flex flex-wrap justify-content-between">
      {
        cards.map((item) => {
          return (
            <ShopCard item={item}></ShopCard>
          )
        })
      }

    </div>
  )
}

export default CardsView