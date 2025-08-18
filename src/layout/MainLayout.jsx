import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';

const MainLayout = () => {
    return (
        <>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <Suspense fallback={<p>loading...</p>}>
                    <Outlet></Outlet>
                </Suspense>
            </main>
            <footer>
                <Footer></Footer>
            </footer>

            <ScrollToTop />
        </>
    );
};

export default MainLayout;