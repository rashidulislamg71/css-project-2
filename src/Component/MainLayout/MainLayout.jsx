
import NavBar from './NavBar/NavBar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <ScrollRestoration />
            <Outlet />
            <Footer />

        </div>
    );
};

export default MainLayout;