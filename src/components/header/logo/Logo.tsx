"use client"
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/logo.png"

const Navbar = () => {
    return (
        <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="eye logo" width={90} height={90} priority/>
            <span className="lg:text-3xl md:text-2xl text-xl font-bold ">SocialEye</span>
        </Link>
    )
}
export default Navbar