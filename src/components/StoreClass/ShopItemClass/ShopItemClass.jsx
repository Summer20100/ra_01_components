import { Component } from 'react'
import s from './ShopItemClass.module.css'

class ShopItemClass extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let item = this.props.item
    return (
      <div className={s.mainContent} >
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className={s.description}>{item.descriptionFull}</div>
        <div className={s.highlightWindow + s.mobile}>
          <div className={s.highlightOverlay}></div>
          <div className={s.divider}></div>
          <div className={s.purchaseInfo}>
            <div className={s.price}>{item.currency + item.price}</div>
            <button className={s.button}>Добавить в корзину</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ShopItemClass 