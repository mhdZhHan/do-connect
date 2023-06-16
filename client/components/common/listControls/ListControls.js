import { BiChevronRight } from 'react-icons/bi'
import styles from '@/styles/components/controls.module.scss'

const ListControls = () => {
    return (
        <div className={styles.controlsContainer}>
            <ul className={styles.controlsContainer__options}>
                <li className={styles.controlsContainer__item}>
                    <span className={styles.controlsContainer__label}>all categories</span>
                    <span className={styles.controlsContainer__arrowIcon}>
                        <BiChevronRight size={20} />
                    </span>
                </li>
                <li className={styles.controlsContainer__item}>
                    <span className={styles.controlsContainer__label}>all tags</span>
                    <span className={styles.controlsContainer__arrowIcon}>
                        <BiChevronRight size={20} />
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