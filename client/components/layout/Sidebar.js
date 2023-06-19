"use client"
import Link from "next/link"

import { useState } from "react"
import { BiChevronDown, BiChevronRight } from 'react-icons/bi'
import { FaLayerGroup, FaUser, FaUsers } from 'react-icons/fa'

const Sidebar = ({ isSidebarOpen }) => {
    const [isCollapse, setIsCollapse] = useState([true, true, true])

    const toggleCollapse = (index) => {
        const updatedCollapseStates = [...isCollapse]
        updatedCollapseStates[index] = !isCollapse[index]
        setIsCollapse(updatedCollapseStates)
    }
    
    return (
        <aside className={`layout__sidebar ${isSidebarOpen ? `layout__sidebar-open` : ''}`}>
            <div className="sidebar-container">
                <div className="sidebar-container__head" onClick={() => toggleCollapse(0)}>
                    <span className="sidebar-container__head__icon">
                        {isCollapse[0] ? <BiChevronDown size={20}/> : <BiChevronRight size={20}/>}
                    </span>
                    <span className="sidebar-container__head__text">Community</span>
                </div>

                {
                    isCollapse[0] && (
                        <ul className="sidebar-container__content">
                            <li><Link href="" className="sidebar-container__content__item">
                                <span className="sidebar-container__content__prefix-icon">
                                    <FaLayerGroup size={14} color="#909090" />
                                </span>
                                <span className="sidebar-container__content__text">Everything</span>
                            </Link></li>
                            <li><Link href="" className="sidebar-container__content__item">
                                <span className="sidebar-container__content__prefix-icon">
                                    <FaUser size={14} color="#909090" />
                                </span>
                                <span className="sidebar-container__content__text">My Posts</span>
                            </Link></li>
                            <li><Link href="/groups" className="sidebar-container__content__item">
                                <span className="sidebar-container__content__prefix-icon">
                                    <FaUsers size={14} color="#909090" />
                                </span>
                                <span className="sidebar-container__content__text">Groups</span>
                            </Link></li>
                        </ul>
                    )
                }

                <div className="sidebar-container__head" onClick={() => toggleCollapse(1)}>
                    <span className="sidebar-container__head__icon">
                        {isCollapse[1] ? <BiChevronDown size={20}/> : <BiChevronRight size={20}/>}
                    </span>
                    <span className="sidebar-container__head__text">Categories</span>
                </div>

                {
                    isCollapse[1] && (
                        <ul className="sidebar-container__content">
                            <li><Link href="" className="sidebar-container__content__item">
                                <span className="sidebar-container__content__prefix-icon"></span>
                                <span className="sidebar-container__content__text">Everything</span>
                            </Link></li>
                            <li><Link href="" className="sidebar-container__content__item">
                                <span className="sidebar-container__content__prefix-icon"></span>
                                <span className="sidebar-container__content__text">My Posts</span>
                            </Link></li>
                            <li><Link href="" className="sidebar-container__content__item">
                                <span className="sidebar-container__content__prefix-icon"></span>
                                <span className="sidebar-container__content__text">More</span>
                            </Link></li>
                        </ul>
                    )
                }

                <div className="sidebar-container__head" onClick={() => toggleCollapse(2)}>
                    <span className="sidebar-container__head__icon">
                        {isCollapse[2] ? <BiChevronDown size={20}/> : <BiChevronRight size={20}/>}
                    </span>
                    <span className="sidebar-container__head__text">Messages</span>
                </div>

                {
                    isCollapse[2] && (
                        <ul className="sidebar-container__content">
                            <li><Link href="" className="sidebar-container__content__item">
                                <span className="sidebar-container__content__prefix-icon"></span>
                                <span className="sidebar-container__content__text">Everything</span>
                            </Link></li>
                            <li><Link href="" className="sidebar-container__content__item">
                                <span className="sidebar-container__content__prefix-icon"></span>
                                <span className="sidebar-container__content__text">My Posts</span>
                            </Link></li>
                            <li><Link href="" className="sidebar-container__content__item">
                                <span className="sidebar-container__content__prefix-icon"></span>
                                <span className="sidebar-container__content__text">More</span>
                            </Link></li>
                        </ul>
                    )
                }
            </div>
        </aside>
    )
}

export default Sidebar