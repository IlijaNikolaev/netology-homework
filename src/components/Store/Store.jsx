import {useState} from "react";

import CardsView from "../CardsView/CardsView"
import ListView from "../ListView/ListView";
import IconSwitch from "../IconSwitch/IconSwitch";

import 'bootstrap/dist/css/bootstrap.min.css'


const Store = ({products}) => {
  let [layout, setLayout] = useState('view_list')
  let changeLayout = () => {
    setLayout(prevState => prevState === 'view_list' ? 'view_module' : 'view_list')
  }
  return (
    <div className="container">
      <IconSwitch icon={layout} onChange={changeLayout}></IconSwitch>
      {
        layout === 'view_list' ?
          <ListView cards={products}></ListView> :
          <CardsView cards={products}></CardsView>
      }

    </div>
  )
}

export default Store;