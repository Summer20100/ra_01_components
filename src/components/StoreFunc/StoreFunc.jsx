import s from './StoreFunc.module.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import ShopItemFunc from './ShopItemFunc/ShopItemFunc'

const StoreFunc = ({ item }) => {
  return (
    <Routes>
      <Route path='/storefunc' element={
        <div className={s.container}>
          <div className={s.backgroundElement}>
          </div>
          <div className={s.highlightWindow}>
            <div className={s.highlightOverlay}></div>
          </div>
          <div className={s.window}>
            <ShopItemFunc item={item} />
          </div>
        </div>
      } />
    </Routes>
  )
}

export default StoreFunc 