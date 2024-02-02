"use client"

import Link from "next/link";
import {INavBarProps, INavList} from "../../../../utils/Interfaces/types";
import {navItems} from "../../../../utils/data/Data";

const navItem: INavList[] = navItems

const Navbar: React.FC<INavBarProps> = ({containerStyle, linkStyles, anchorStyle}) => {
    return (
        <nav className={`${containerStyle}`}>
            <ul className={`${linkStyles}`}>
                {navItem.map((navItems) => {
                        return (<><Link href={navItems.href} className={`${anchorStyle}`}>{navItems.name}</Link></>)
                    }
                )}
            </ul>
            <div className="flex items-center md:gap-1.5 gap-4 md:flex-row flex-col">
                <Link className="font-bold border-2 border-[#343433] rounded-[14px] md:px-9 px-10 py-[7px]"
                      href="/logIn">Login</Link>
                <Link
                    className="font-bold eye_sign_up border-2 border-rose-900 rounded-[14px] text-white px-9 py-[7px]"
                    href="/signUp">Sign Up</Link>
            </div>
        </nav>
    )
}
export default Navbar