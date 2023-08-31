import React from 'react'
import styles from './Style.module.css'
const Navbar = () => {
    return (
        <>
            <div className={styles.mainDiv}>
                <h1 className={styles.Title}>DevGenix</h1>
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
                    {/* <button class="text-3xl text-white bg-sky-700 sm:bg-yellow" >
                &#9776;
            </button> */}
                </div>

            </div>

        </>
    )
}

export default Navbar