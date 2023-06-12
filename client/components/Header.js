"use client"
import Link from "next/link"
import { FiMenu } from 'react-icons/fi'

const Header = ({ toggleSidebar }) => {
    return (
        <header className="layout__header">
            <div className="header-container">
                <div className="heder-container__left">
                    <div 
                        className="header-container__menu-icon" 
                        onClick={toggleSidebar}
                    >
                        <FiMenu size={30} style={{ cursor: 'pointer' }} />
                    </div>
                    <h1 className="header-container__logo"><Link href="/">DocConnect</Link></h1>
                </div>
                <div className="header-container__right">
                    <div className="profile">
                        <span>M</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header