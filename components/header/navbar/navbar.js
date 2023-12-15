'use client'
import Link from "next/link";
import classes from './navbar.module.css';
import { usePathname } from "next/navigation";

export default function Navbar() {
    const activePath = usePathname();
    const navOptions = [ 
        {path: '/community', displayText: 'Foodies Community'},
        {path: '/meals', displayText: 'Browse Meals'}
    ];
    return (
        <nav className={classes.nav}>
            <ul>
                {navOptions.map( ({path, displayText}) => {
                    const isActiveStyle = activePath.startsWith(path) ? classes.active : undefined;
                    return (
                    <li key={path}>
                        <Link key={path} href={path} className={isActiveStyle}> {displayText} </Link>
                    </li>)
                })}
            </ul> 
        </nav>
        
    )
}

