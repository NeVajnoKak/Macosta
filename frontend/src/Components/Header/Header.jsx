import React from 'react'

const Header = (props) => {
  return (
    <>
    <header className="py-5 bg-image-full" style={{backgroundImage: `url(${props.imageCar})`}}>
            <div className="text-center my-5">
                <img className="img-fluid rounded-circle mb-4" src={props.imageLogo} alt="..." />
                <h1 className="text-white fs-3 fw-bolder">Макоста</h1>
                <p className="text-white-50 mb-0">{props.title}</p>
            </div>
    </header>
    </>
  )
}

export default Header