import { BiSearchAlt2 } from 'react-icons/bi'
import styles from '@/styles/components/banner.module.scss'

function HomeBanner() {
    return (
        <div className={styles.banner_container}>
            <h1 className={styles.banner_container__title}>
                Welcome to our community
            </h1>
            <h2 className={styles.banner_container__subtitle}>
                Welcome! Please search before posting
            </h2>
            <div className={styles.banner_container__search_box}>
                <input 
                    type="text" 
                    className={styles.banner_container__search_box__input} 
                    placeholder='Search'
                />
                <BiSearchAlt2 size={30} color='#909090' />
            </div>
        </div>
    )
}

export default HomeBanner