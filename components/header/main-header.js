import Link from "next/link";
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from "next/image";
import Background from "./background/background";
import Navbar from "./navbar/navbar";

export default function MainHeader() {
    return (
        <>
            <Background/>
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={logoImg} alt="A plate with food on it" priority/>
                    NextLevel Food  
                </Link>
                <Navbar/>
            </header>
        </>
        
    );
}
