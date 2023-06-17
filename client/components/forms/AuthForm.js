"use client"
import { Fragment, useState } from "react"
import { FaUser } from 'react-icons/fa'
import { RiCloseFill } from 'react-icons/ri'

import styles from '@/styles/components/auth.module.scss'

const AuthForm = ({ toggleAuthForm, isSignUp }) => {
    return (
        <div className={styles.authFormModel}>
            <div className={styles.authFormModel__container}>
                <div 
                    className={styles.authFormModel__closeBtn}
                    onClick={toggleAuthForm}
                >
                    <RiCloseFill size={30} />
                </div>

                {isSignUp ? (
                    <div className={styles.authFormModel__container__welcome}>
                        <h2>Welcome! <span>👋</span></h2>
                        <p>Let's create your account</p>
                    </div>
                ): (
                    <div className={styles.authFormModel__container__welcome}>
                        <h2>Welcome back <span>👋</span></h2>
                        <p>Log in to your account</p>
                    </div>
                )}

                <form action="">
                    {isSignUp && (
                        <Fragment>
                            <div className={`${styles.authFormModel__formGroup} ${styles.fullWidth}`}>
                                <label htmlFor="id_for_username">Email</label>
                                <input type="email" id="id_for_username" />
                            </div>

                            <div className={`${styles.authFormModel__formGroup} ${styles.fullWidth}`}>
                                <label htmlFor="id_for_username">Username</label>
                                <input type="text" id="id_for_username" />
                            </div>

                            <div className={`${styles.authFormModel__formGroup} ${styles.fullWidth}`}>
                                <label htmlFor="id_for_username">Full name</label>
                                <input type="text" id="id_for_username" />
                            </div>

                            <div className={`${styles.authFormModel__formGroup} ${styles.fullWidth}`}>
                                <label htmlFor="id_for_username">Specialization</label>
                                <input type="text" id="id_for_username" />
                            </div>

                            <div className={`${styles.authFormModel__formGroup} ${styles.fullWidth}`}>
                                <label htmlFor="id_for_username">Clinic</label>
                                <input type="text" id="id_for_username" />
                            </div>

                            <div className={`${styles.authFormModel__submitBtn} ${styles.fullWidth}`}>
                                <button>
                                    <span className={styles.text}>Create your account</span>
                                </button>
                            </div>
                        </Fragment>
                    )}

                    {!isSignUp && (
                        <Fragment>
                            <div className={styles.authFormModel__formGroup}>
                                <label htmlFor="id_for_username">Email / Username</label>
                                <input type="text" id="id_for_username" />
                            </div>

                            <div className={styles.authFormModel__formGroup}>
                                <label htmlFor="id_for_password">Password</label>
                                <input type="password" id="id_for_password"/>
                            </div>

                            <div className={styles.authFormModel__submitBtn}>
                                <button>
                                    <span className={styles.icon}><FaUser size={10} color="#fff" /></span>
                                    <span className={styles.text}>Login</span>
                                </button>
                            </div>
                        </Fragment>
                    )}
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