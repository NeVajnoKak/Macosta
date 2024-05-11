import React from 'react'
import porsche from '../../img/porsche.png'
import mclaren from '../../img/mclaren.jpg'
import logo from '../../img/logo.png'
import './About.css'
import Header from '../../Components/Header/Header'
const About = () => {
  return (
    <>
    <Header imageLogo = {logo} title = "Создано в 2024 году 29 апреля" imageCar = {porsche}></Header>

    <section className="py-5">
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h2>About Company</h2>
                        <p className="lead">Макоста - новая компания, ставшая популярной за короткое время. Она специализируется на продаже товаров, созданных в 2024 году. Их ассортимент включает в себя различные продукты - от электроники до модной одежды и косметики. Компания стремится предложить своим клиентам самые инновационные и качественные товары этого года, поддерживая тренды и ожидания современного рынка.</p>
                        <p className="mb-0">Мы, в Макоста, гордимся тем, что за короткое время смогли стать лидером рынка. Наш успех определяется широким ассортиментом товаров и стратегией, ориентированной на инновации и высокое качество, соответствующие современным требованиям рынка.</p>
                    </div>
                </div>
            </div>
    </section>
    <div className="py-5 bg-image-full" style={{backgroundImage: `url(${mclaren})`}}>
            <div style={{height: '20rem'}}></div>
        </div>
        <section className="py-5">
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h2>Quality of our Company</h2>
                        <p className="lead">Качество является фундаментом Макоста. Мы стремимся к высоким стандартам, обеспечивая клиентам инновационные продукты и надежность, на которую можно полагаться.</p>
                        <p className="mb-0">Я не могу раскрыть все секреты Макосты, но могу подтвердить, что её успех основан на качестве, инновациях и преданности клиентам.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About