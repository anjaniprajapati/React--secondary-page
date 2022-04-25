import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__text'>
            <div className='logo'><img src='https://mojo.modeltheme.com/maestropizzini/wp-content/uploads/2018/01/logo.png'  alt='logo'/></div>
            <ul className='navbar__ul'>
                <li><a href=''>HOME</a></li>
                <li><a href=''>MEMU</a></li>
                <li><a href='https://mojo.modeltheme.com/maestropizzini/about-us/'>ABOUT</a></li>
                <li><a href=''>SHOP</a></li>
                <li><a href=''>NEWS</a></li>
                <li><a href='https://mojo.modeltheme.com/maestropizzini/contact/'>CONTACT</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;
