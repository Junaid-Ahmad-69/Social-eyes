"use client"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import Logo from "@/components/header/logo/Logo";
import {AlignJustify} from "lucide-react";
import Navbar from "@/components/header/navbar/Navbar";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify className="cursor-pointer"/>
            </SheetTrigger>
            <SheetContent>
                <div className="flex flex-col items-center justify-between h-full py-12">
                    <div className="flex flex-col items-center h-full">
                        <div className="social_eye_mobile_logo">
                            <Logo/>
                        </div>
                        <Navbar containerStyle="flex flex-col items-center justify-between h-full"
                                anchorStyle="text-xl font-semibold"
                                linkStyles="flex flex-col items-center mb-4 h-full social_eye_mobile_gap"/>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
export default MobileNav