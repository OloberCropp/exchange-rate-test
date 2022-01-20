import Footer from './Footer'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <div className='App'>
            <header>
                <h1 className="logo">
                    ExchangeRates
                </h1>
            </header>

            <Outlet />

            <Footer />
        </div>
    )
}

export default Layout
