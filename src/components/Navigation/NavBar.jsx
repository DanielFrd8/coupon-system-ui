import React from 'react'
import classes from './NavBar.module.css'

export default function NavBar({ items, }) {
    const [className,setClassName] =React.useState(classes.topnav)
    const [toggle,setToggle] =React.useState(classes.topnav)

    return (
        <nav className={className}>
            {items.map((value, key) =>
                !value.dropdownMenu
                    ? <a key={key} onClick={value.onClick}>{value.text}</a>
                    : <div key={key} className={classes.dropdown}>
                        <button className={classes.dropbtn}>
                            {value.text}
                        </button>
                        <div className={classes.dropdownContent}>
                            {value.dropdownMenu.map((v, k) =>
                                <a key={k} onClick={v.onclick}>{v.text}</a>)
                            }
                        </div>
                    </div>
            )}
            <a className={classes.icon}
            onClick={() => {                
                setToggle(prev => !prev)
                setClassName(toggle ? classes.topnav + " " + classes.responsive : classes.topnav)
            }}>
                &#9776;
            </a>
        </nav >
    )
}
