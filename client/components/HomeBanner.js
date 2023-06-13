"use client"
import Image from 'next/image'

function HomeBanner() {
    return (
        <div className="banner-container">
            <h1 className="banner-container__title">
                Welcome to our community
            </h1>
            <h2 className="banner-container__subtitle">
                We're happy to have you here. If you need help, please search before you post.
            </h2>
            <div className="banner-container__search-box">
                <input type="text" className="banner-container__search-box__input" />
                <Image />
            </div>

            {/* style */}
            <style jsx>{`
                .banner-container {
                    h1 {
                        color: red;
                    }   
                }
            `}</style>
        </div>
    )
}

export default HomeBanner