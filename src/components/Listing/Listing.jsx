import './index.css'

const Listing = ({data}) => {
  return (
    data.map((item) => {

      let sygn;
      switch (item.currency_code) {
        case "USD":
          sygn = '$';
          break;
        case "EUR":
          sygn = '€'
          break;
        default:
          sygn = item.currency_code;
      }

      let quantityClass;
      switch (true) {
        case item.quantity <= 10:
          quantityClass = 'level-low'
          break;
        case item.quantity > 10 && item.quantity <= 20:
          quantityClass = 'level-medium'
          break;
        default:
          quantityClass = 'level-high'
      }

      return (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img
                src={item?.MainImage?.url_570xN ? item.MainImage.url_570xN : '/images/no-image.jpg'}/>
              {/*Прошу по возможности уточнить, адекватно ли делать так с отсутствующими данными*/}
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              {
                item.title ?
                  ((item.title.length < 50) ? item.title : `${item.title.substring(0, 50)}...`)
                  :
                  'no description'
              }
            </p>
            <p className="item-price">{sygn} {item.price}</p>
            <p className={`item-quantity ${quantityClass}`}>{item.quantity || 0} left</p>
          </div>
        </div>
      )

    })
  )
}

export default Listing