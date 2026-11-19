import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router-dom' // ab websites pe humne dekha hai ki footer same rehta hai aaki sab upar ka change hota rehta hai to   abhi ye project jo hum bana rahe hain usmein humein header and footer same rakhna hai bas beeech ka change karna hai to vo outlet ke through acheive hota hai    ye karta kya hai jo bhi layout hoga use as a base use kar lega and jo bhi cheezien iske upar aur neche likhi hongi jaise neeche header and footer likhi hai unhein same rakhega  to iss tarahse hum ise use ekar sakte hain
import Footer from './footer/Footer'

function Root() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Root
