"use client"
import { useState } from 'react'
import { BiChevronRight, BiChevronDown } from 'react-icons/bi'
import styles from '@/styles/components/controls.module.scss'

const ListControls = () => {
    const [isCollapse, setIsCollapse] = useState([true, true])

    const toggleCollapse = (index) => {
        const updatedCollapseStates = [...isCollapse]
        updatedCollapseStates[index] = !isCollapse[index]
        setIsCollapse(updatedCollapseStates)
    }

    return (
        <div className={styles.controlsContainer}>
            <ul className={styles.controlsContainer__options}>
                <li 
                    className={styles.controlsContainer__item}
                    onClick={()=>toggleCollapse(0)}
                >
                    <span className={styles.controlsContainer__label}>all categories</span>
                    <span className={styles.controlsContainer__arrowIcon}>
                        {isCollapse[0] ? <BiChevronRight size={20} /> : <BiChevronDown size={20}/>}
                    </span>
                </li>

                <li 
                    className={styles.controlsContainer__item}
                    onClick={()=>toggleCollapse(1)}
                >
                    <span className={styles.controlsContainer__label}>all tags</span>
                    <span className={styles.controlsContainer__arrowIcon}>
                        {isCollapse[1] ? <BiChevronRight size={20} /> : <BiChevronDown size={20}/>}
                    </span>
                </li>

                <li className={`${styles.controlsContainer__item} ${styles.hover} ${styles.active}`}>
                    <span className={styles.controlsContainer__label}>Latest</span>
                </li>

                <li className={`${styles.controlsContainer__item} ${styles.hover}`}>
                    <span className={styles.controlsContainer__label}>Top</span>
                </li>
            </ul>
        </div>
    )
}

export default ListControls