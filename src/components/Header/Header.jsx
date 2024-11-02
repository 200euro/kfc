import React, { useState } from 'react'
import './Header.scss'


const Header = () => {

const [isActive, setIsActive] = useState(false)

const toggleBurger = () => {
  setIsActive(!isActive)
}

const closeBurger = () =>{
  setIsActive(false)
}


  return (
  <>
  <header className="header">
   <div className="container">
     <div className="header__wrapper">
      
<img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Antu_application-x-php.svg/1200px-Antu_application-x-php.svg.png" alt="" className="logo" />

<div className= {`header__menu ${isActive ? 'active' : ''}`}>
   <a href="">home</a>
   <a href="">contacts</a>
   <a href="">portfolio</a>
   <a href="">Catalog</a>
</div>

<div onClick={toggleBurger} className={`burger ${isActive ? 'active' : ''}`}>
  <div></div>
  <div></div>
</div>

     </div>
   </div>
  </header>

  </>
  )
}

export default Header