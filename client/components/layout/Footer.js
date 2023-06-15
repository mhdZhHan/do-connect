import Link from "next/link"

const Footer = () => {
    return (
        <footer className="layout__footer">
            <div className="footer-container">
                <div className="footer-container__left">
                    <h4 className="footer-container__title">Hello Community</h4>
                    <p className="footer-container__description">
                        Have fun tinkering, share knowledge and respect other members.
                    </p>
                </div>

                <hr className="hr-line" />

                <div className="footer-container__bottom">
                    <p className="footer-container__credit"> 
                        © Copyright {new Date().getFullYear()} <Link href="/">DoConnect</Link> All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer