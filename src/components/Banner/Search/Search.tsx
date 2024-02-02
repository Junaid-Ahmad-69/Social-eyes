"use client"
import {ChangeEvent, useState} from "react";
import {FaMicrophoneLines} from "react-icons/fa6";
import {FaSearch} from "react-icons/fa";

const Search = () => {

    const [query, setQuery] = useState<string>("");

    return (
        <form className="mb-4 w-full">
            <div className="mx-auto sm:container">
                <div className="2xl:mx-1 xl:mx-20 md:mx-0 sm:mx-4 mx-0">
                    <div className="relative w-full">
                        <input type="text" value={query}
                               className="social_eye_search_field rounded-xl bg-white shadow-2xl w-full p-5 ps-24 focus:outline-0 focus:border-0"
                               placeholder="I'm looking for influencers who..."
                               onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}/>
                        <span
                            className="absolute top-[30%] cursor-pointer left-6 text-xl social_eye_mic_search "><FaMicrophoneLines
                            className="text-rose-500"/></span>
                        <span className="absolute top-[32%] cursor-pointer right-6 text-xl "><FaSearch
                            className="text-slate-700"/></span>
                    </div>
                </div>
            </div>
        </form>
    )

}
export default Search