import React from 'react'
import styleContact from './style.module.css'
const Contact = () => {
    return (
        <>
            <div id="register" className={styleContact.mainContContact}>
                <h3>  Get in Touch</h3>

                <h4>Have a project in mind or simply want to know more about us? We're all ears!
                    Fill out the form below, and let's start the conversation.</h4>

                <form className={styleContact.form}>
                    <h2>Contact Form</h2>
                    <div className={styleContact.formContainer}>
                        {/* <label>Name</label> */}
                        <input className={styleContact.input} placeholder="Name" type='text'></input>
                    </div>

                    <div className={styleContact.formContainer}>
                        {/* <label>Email</label> */}
                        <input className={styleContact.input} placeholder="Email" type="email"></input> </div>
                    <div className={styleContact.formContainer}>
                        {/* <label>Message</label> */}
                        <input className={styleContact.input} placeholder="Your Message" type='text'></input>
                    </div>

                    <button className={styleContact.button}>Send Now</button>


                </form>


                <p> Thank you for considering YourWebDev. We're excited to collaborate with you and bring your digital aspirations to life.
                </p>
            </div>
        </>
    )
}

export default Contact