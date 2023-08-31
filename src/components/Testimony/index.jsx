import React from 'react'
import styleTesT from './Style.module.css'

const Testimonials = () => {
    return (
        <>

            <div className={styleTesT.mainConatiner}>
                <h4 className={styleTesT.title}>What Our Clients Say</h4>
                <div className={styleTesT.conatiner}>
                    <section className={styleTesT.section01}> "YourWebDev turned our vision into reality with an elegant website that boosted our brand
                        presence."<br /> - Sarah T., CEO of InnovateNow
                    </section>
                    <section className={styleTesT.section02}> "Their dedication to perfection and knack for
                        understanding client needs sets them apart.
                        An absolute joy to work with!"<br /> - Mark S., Marketing Director at GlobalGoods
                    </section>

                </div>
            </div>


        </>
    )
}

export default Testimonials