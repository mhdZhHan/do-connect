"use client"
import { useState } from "react"
import styles from '@/styles/components/auth.module.scss'

const AuthForm = ({ toggleAuthForm }) => {
    const [isSignup, setIsSignup] = useState(false)

    return (
        <div className={styles.authFormModel}>
            <div className={styles.authFormModel__container}>
                <form action="">
                    <div class={styles.authFormModel__formGroup}>
                        <label for="id_for_username">Username</label>
                        <input type="text" id="id_for_username" />
                    </div>
                    
                    <div class={styles.authFormModel__formGroup}>
                        <label for="id_for_password">Password</label>
                        <input type="password" id="id_for_password"/>
                    </div>
                </form>
            </div>

            <div 
                className={styles.authFormModel__overlay}
                onClick={toggleAuthForm}
            ></div>
        </div>
    )
}

export default AuthForm