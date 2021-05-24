import Star from "../Star/Star";
import * as _ from 'lodash'

const Stars = ({count}) => {
  let starsArray = _.times(count, String)
  return (
    <ul style={{display: 'flex'}} className="card-body-stars">
      {
        starsArray.map((key) => {
          return (
            <li key={key} style={{listStyle: 'none'}}>
              <Star />
            </li>
          )
        })
      }
    </ul>
  )
}

export default Stars;