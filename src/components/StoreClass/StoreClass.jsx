import s from './StoreClass.module.css'
import { Route, Routes } from 'react-router-dom'
import ShopItemClass from './ShopItemClass/ShopItemClass'

const StoreClass = ({ item }) => {
  return (
    <Routes>
      <Route path='/storeclass' element={
        <div className={s.container}>
          <div className={s.backgroundElement}>
          </div>
          <div className={s.highlightWindow}>
            <div className={s.highlightOverlay}></div>
          </div>
          <div className={s.window}>
            <ShopItemClass item={item} />
          </div>
        </div>
      } />
    </Routes>
  )
}

export default StoreClass 