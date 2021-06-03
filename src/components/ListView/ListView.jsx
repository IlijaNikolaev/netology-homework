import ShopCard from "../CardsView/ShopCard/ShopCard";
import ShopItem from "./ShopItem/ShopItem";

const ListView = ({cards}) => {
  return (
    <div className="list row d-flex flex-column">
      {
        cards.map((item) => {
          return (
            <ShopItem item={item}></ShopItem>
          )
        })
      }

    </div>
  )
}

export default ListView