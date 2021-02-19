import React from 'react'
const Header = (props) => {
    return (
        <header className="center">
            <img src={props.logo} alt="logo"/>
        </header>
    )
}

export default Header
