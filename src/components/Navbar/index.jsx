import React, { useState } from 'react'
import styles from './Style.module.css'
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };
    return (
        <>
            <div className={styles.mainDiv}>
                <h1 className={styles.Title}>DevGenZx</h1>
                <div className={styles.NavOptions}>
                    <a className={styles.NavOption} href="#about">
                        <h3 >About</h3>
                    </a>
                    <a className={styles.NavOption} href="#contact">
                        <h3 >Contact</h3>
                    </a>
                    <a className={styles.NavOption} href="#register">
                        <h3 >Register Now</h3>
                    </a>

                    {isOpen ? null : (
                        <button className={styles.button} onClick={toggleMenu}>
                            &#9776;
                        </button>
                    )}
                    {isOpen && (
                        <dialog className={styles.NavLists} onClick={closeMenu}>
                            <button className={styles.closeBtn} onClick={closeMenu}>✖</button>
                            <ul>
                                <a href="#about" className={styles.NavList}>About </a>
                                <a href="#contact" className={styles.NavList} >Contact</a>
                                <a href="#register" className={styles.NavList}>Register Now</a>

                            </ul>
                        </dialog>
                    )}
                </div>

            </div>

        </>
    )
}

export default Navbar