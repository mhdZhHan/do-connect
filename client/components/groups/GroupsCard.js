import { FaUser, FaBan } from 'react-icons/fa'
import styles from '@/styles/pages/groups.module.scss'

const GroupsCard = () => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardContainer__top}>
                <div className={styles.cardContainer__top__logo}>
                    <img src="/assets/group-logo.png" alt="group_logo" />
                </div>

                <div className={styles.cardContainer__top__title}>
                    <h3>Hello world research</h3>
                </div>

                <div className={styles.cardContainer__top__userCount}>
                    <span className={styles.userIcon}><FaUser size={12} color="#909090" /></span>
                    <span className={styles.userCount}>5</span>
                </div>
            </div>

            <div className={styles.cardContainer__body}>
                <p className={styles.cardContainer__body__text}>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Quia, aspernatur!
                </p>

                <div className={styles.cardContainer__body__badge}>
                    <span className={styles.badge__icon}><FaBan size={14} color='#909090' /></span>
                    <span className={styles.badge__text}>Closed</span>
                </div>
            </div>
        </div>
    )
}

export default GroupsCard