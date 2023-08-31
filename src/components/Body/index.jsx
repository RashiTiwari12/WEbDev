import React from 'react'
import styleBody from './style.module.css'
const Body = () => {
    return (
        <>
            <div className={styleBody.mainCont}>
                <h1 className={styleBody.titleText}>Welcome to Your WebDev - </h1>
                <h2 className={styleBody.titleText02}>Where Digital Experiences Come to Life</h2>
                <br />
                <p className={styleBody.para}>Are you looking for a partner to transform your digital dreams into reality?
                    <br />
                    Look no further. At YourWebDev, we specialize in crafting exceptional websites that captivate,
                    <br />
                    engage, and deliver results. With a perfect blend of creativity and technical expertise,
                    we create online experiences that leave a lasting impression.
                </p>
                <a href='#about' ><button className={styleBody.button}>More Information</button></a>
            </div>
        </>
    )
}

export default Body