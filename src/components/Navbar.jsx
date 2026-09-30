import { useState } from 'react'
import logo from '../assets/unicorn.svg'
import PageLinks from './PageLinks.jsx'
import SocialLinks from './SocialLinks.jsx'

const Navbar = () => {
    const [isToggled,setToggle] = useState(false);
    const handleToggle = () =>{
        setToggle(!isToggled)
    }
  return (
        <nav className="navbar">
        <div className="container navbar-flex">
            <img src={logo} alt="logo" className="logo"/>

    {/* <!-- main menu --> */}
            <div className="main-menu">
                <PageLinks groupClass="main-menu-list" />
                    <SocialLinks groupClass="nav-icons" listItemClass="nav-icon" />
                {/* <ul className="main-menu-list">
                    <li><a href="#home">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#services">services</a></li>
                    <li><a href="#tours">Tours</a></li>
                </ul> */}

                {/* <ul className="nav-icons" >
                    <li><a href="http://www.facebook.com" className="nav-icon"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#" className="nav-icon"><i className="fa-brands fa-threads"></i></a></li>
                    <li><a href="#" className="nav-icon"><i className="fa-brands fa-x-twitter"></i></a></li>
                </ul> */}
            </div>
        
    {/* <!-- mobile menu --> */}
            <div className="mobile-menu">
                <div className="mobile-menu-toggle">
                    <button onClick={handleToggle}>
                    <i className="fa-solid fa-bars"></i></button>
                    <div className={isToggled ? "mobile-menu-items active" : "mobile-menu-items"}>
                        <PageLinks groupClass="mobile-menu-list" />
                        {/* <SocialLinks groupClass="nav-icons" listItemClass="nav-icon" /> */}
                        {/* <ul className="mobile-menu-list">
                            <li><a href="#home">home</a></li>
                            <li><a href="#about">about</a></li>
                            <li><a href="#services">services</a></li>
                            <li><a href="#tours">tours</a></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar