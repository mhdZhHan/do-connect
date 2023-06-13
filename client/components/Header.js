"use client"
import Link from "next/link"
import { FiMenu } from 'react-icons/fi'

const Header = ({ toggleSidebar, isSidebarOpen }) => {
    return (
        <header className="layout__header">
            <div className={`header-container ${isSidebarOpen ? `layout__wrapper` :``}`}>
                <div className="heder-container__left">
                    <div 
                        className="header-container__menu-icon" 
                        onClick={toggleSidebar}
                    >
                        <FiMenu size={30} style={{ cursor: 'pointer' }} />
                    </div>

                    <h1 className="header-container__logo"><Link href="/">DoConnect</Link></h1>
                </div>
                
                <div className="header-container__right">
                    <div 
                        className="header-container__menu-icon" 
                        onClick={toggleSidebar}
                    >
                        <FiMenu size={30} style={{ cursor: 'pointer' }} />
                    </div>

                    <div className="profile">
                        <span>M</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header