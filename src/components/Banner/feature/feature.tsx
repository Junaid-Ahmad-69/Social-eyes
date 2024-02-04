"use client"
import {IBannerFeature} from "../../../../utils/Interfaces/types";
import {featureData} from "../../../../utils/data/Data";
import {useEffect, useState} from "react";
import {number} from "prop-types";

const bannerData: IBannerFeature[] = featureData
const Feature = () => {
    const [showMore, setShowMore] = useState<boolean>(true)
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [isExpanded , setIsExpanded] = useState<number | null>(null)

    const getCurrentWidth = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", getCurrentWidth);
        return () => {
            window.removeEventListener("resize", getCurrentWidth)
        }
    }, [windowWidth]);
    const handlerShowLabel = (index: number) => {
        setShowMore(prevState => !prevState)
        setIsExpanded((prevIndex) => (prevIndex === index ? null : index));
    }

    return (
        <>
            {bannerData.map((data, index) => {
                const sliceMobile = data.desc.slice(0, 65)
                const expandIndex = isExpanded === index;
                return (
                    <section key={index} className="bg-white shadow-2xl p-4 rounded-2xl">
                        <h2 className="mb-2 text-lg font-semibold text-slate-700">{data.title}</h2>
                        <div className="w-full">
                            <p className="text-md text-neutral-500 social_eye_feature_hidden">{windowWidth <= 480 && !expandIndex ? `${sliceMobile} ....` : data.desc} {windowWidth <= 480 &&
                                <button className="socila_eye_show_more font-medium underline text-blue-900 " key={index}
                                    onClick={() => handlerShowLabel(index)}> {expandIndex ? " Show Less" : " Show More"}</button>}
                            </p>
                        </div>
                    </section>
                )
            })}
        </>
    )
}
export default Feature