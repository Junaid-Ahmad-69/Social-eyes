"use client"
import Navbar from "@/components/header/navbar/Navbar";
import Logo from "@/components/header/logo/Logo";
import MobileNav from "@/components/header/mobileNav/MobileNav";
import {useEffect, useState} from "react";


const Header = () => {
    const [mobileNavbar, setMobileNavbar] = useState<boolean>(true);

    useEffect(() => {
        const mobileNav = () => window.innerWidth >= 1024 ? setMobileNavbar(true): setMobileNavbar(false);
        window.addEventListener("resize", mobileNav)
        return () => window.removeEventListener("resize", mobileNav)
    }, [])

    return (
        <header className="flex items-center justify-between w-full ">
            <Logo/>
            {mobileNavbar ? <Navbar anchorStyle="" linkStyles="flex items-center gap-x-[40px]" containerStyle="flex items-center justify-between gap-12"/> : <MobileNav/>}
        </header>
    )
}
export default Header