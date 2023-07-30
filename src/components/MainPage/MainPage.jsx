import s from './MainPage.module.css'
import { Route, Routes } from 'react-router-dom'

const MainPage = () => {
    return (
        <Routes>
            <Route path='/mainpage' element={
                <div className={ s.mainpage }>ТЕСТЫ по COMPONENTS</div>
            } />
        </Routes>
    )
}

export default MainPage