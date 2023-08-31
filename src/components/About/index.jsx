import React from 'react'
import styleAbout from './style.module.css'
import aboutImage from '../../images/image02.png'
const About = () => {
    return (
        <>
            <div id="about" className={styleAbout.mainCont}>

                <div className={styleAbout.wrapper}>
                    <h1>
                        With a passion for innovation and a commitment
                        to excellence, we go beyond the ordinary to create websites that stand out.


                    </h1>
                    <img className={styleAbout.aboutImage} src={aboutImage}></img>
                </div>


                <h2 className={styleAbout.serviceTitle}>Our Services</h2>
                <div className={styleAbout.services}>
                    <section className={styleAbout.serviceSection}>
                        <h1>Web Design</h1>
                        Elevate your online presence with our captivating web designs. We blend aesthetics with user-centered
                        design principles to create websites that leave a mark.
                    </section >
                    <section className={styleAbout.serviceSection}>
                        <h1> Frontend Development</h1>
                        Transforming designs into seamless user experiences is our expertise. Our frontend development team brings your website to life with cutting-edge technologies.
                    </section>

                    <section className={styleAbout.serviceSection}>
                        <h1>Backend Development</h1>
                        Behind every great website is a robust backend. Our backend development ensures your website functions flawlessly, even as complexity grows.
                    </section>

                    <section className={styleAbout.serviceSection}>
                        <h1>E-commerce Solutions</h1>
                        Unlock the potential of online selling with our tailor-made e-commerce solutions. From shopping carts to secure payment gateways, we've got you covered.
                    </section>
                </div>
            </div>

        </>
    )
}

export default About