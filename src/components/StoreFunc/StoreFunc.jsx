import s from './StoreFunc.module.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import ShopItemFunc from './ShopItemFunc/ShopItemFunc'

const StoreFunc = () => {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }

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