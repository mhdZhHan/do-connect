"use client"
import { useState } from 'react'

import EmojiPicker from 'emoji-picker-react';
import { FaBan, FaPaperPlane, FaSmile } from 'react-icons/fa'
import { FiSmile } from 'react-icons/fi'

import styles from '@/styles/pages/chat.module.scss'

const Chat = () => {
    const [isClosed, setIsClosed] = useState(false)
    const [isEmojiPicker, setIsEmojiPicker] = useState(false)

    const toggleEmojiPicker = () => {
        setIsEmojiPicker(!isEmojiPicker)
    }

    return (
        <section id="id_chatScreen" className={styles.chatScreen}>
            <div className={styles.chatScreenHeader}>
                <div className={styles.chatScreenHeader__left}>
                    <img src="/assets/group-logo.png" alt="groupLogo" />
                    <h3 className={styles.chatScreenHeader__left__groupName}>
                        Hello world research
                    </h3>
                </div>
            </div>

            <div className={styles.chatScreen__chatContainer}>
                <ul className={styles.chatScreen__chatContainer__leftChat}>
                    <li className={styles.chatScreen__chatContainer__message}>
                        <span className={styles.message__text}>Hello guys!</span>
                    </li>

                    {/* <li className={styles.chatScreen__chatContainer__message}>
                        <span className={styles.message__text}>Whatsapp guys</span>
                    </li>

                    <li className={styles.chatScreen__chatContainer__message}>
                        <span className={styles.message__text}>This is for helloworld research</span>
                    </li> */}
                </ul>

                <ul className={styles.chatScreen__chatContainer__rightChat}>
                    <li className={styles.chatScreen__chatContainer__message}>
                        <span className={styles.message__text}>Hii all</span>
                    </li>
                    <li className={styles.chatScreen__chatContainer__message}>
                        <span className={styles.message__text}>how are you brother</span>
                    </li>
                    <li className={styles.chatScreen__chatContainer__message}>
                        <span className={styles.message__text}>Why this group</span>
                    </li>
                    <li className={styles.chatScreen__chatContainer__message}>
                        <span className={styles.message__text}>What you mean by hello world research</span>
                    </li>
                </ul>
            </div>

            <div className={styles.chatScreen__footer}>
                {isClosed ? (
                    <div className={styles.chatScreen__closed}>
                        <span className={styles.icon}><FaBan size={20} color='#909090' /></span>
                        <span className={styles.text}>Closed</span>
                    </div>
                ): (
                    <div className={styles.chatScreen__InputBox}>
                        <div 
                            className={styles.chatScreen__InputBox__emojiSelector}
                            onClick={toggleEmojiPicker}
                        >
                            <FiSmile size={28} color='#909090' />
                        </div>

                        <input 
                            type="text" 
                            placeholder='Type here...'
                            className={styles.chatScreen__InputBox__textInput} 
                        />

                        <div className={styles.chatScreen__InputBox__buttons}>
                            <button className={styles.chatScreen__InputBox__buttons__send}>
                                <FaPaperPlane size={20} color='#fff' />
                            </button>
                        </div>
                    </div>
                )}

                {isEmojiPicker && (
                    <div className={styles.chatScreen__footer__emojiPicker}>
                        <EmojiPicker />
                    </div>
                )}
            </div>
        </section>
    )
}

export default Chat