import React from 'react';
import Navbar from '../navbar';

const Layout: React.FC = ({ children }) => {

    return (
        <>
            <Navbar />
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    )
}
export default Layout;