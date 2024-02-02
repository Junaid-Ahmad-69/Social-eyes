import Search from "@/components/Banner/Search/Search";
import Feature from "@/components/Banner/feature/feature";

const Banner = () => {
    return (
        <div className="sm:absolute top-1/2 left-1/2 sm:-translate-x-1/2 w-full sm:-translate-y-1/2 mt-8 sm:mt-0 ">
            <div className="flex items-center justify-center w-full flex-col gap-5">
                <div>
                    <h1 className="text-slate-900 lg:text-5xl md:text-4xl text-3xl text-center font-bold ">Unlock the Power of
                        AI <br/> to
                        Discover Your Perfect Influencer</h1>
                    <p className="lg:text-xl text-md text-center font-medium max-w-3xl mb-4 mt-3  lg:mx-0 mx-8">Utilize AI to identify your perfect
                        influences, streamline campaign management, and optimize your
                        influencer marketing for outstanding ROI.
                    </p>
                </div>
                <Search/>
                <div className="flex items-center gap-4 justify-center flex-wrap md:mx-16 sm:mx-12 mx-0">
                    <Feature title="Explain Options Trading"
                             desc="I'm looking for influencers in the food niche with young kids..."/>
                    <Feature title="Ai, Show Me Options" desc="Unlock a world of possibilities at your own with great fingertips ..."/>
                    <Feature title="Brainstorm Influencers Names"
                             desc="Joelle Marfinian, Nour Arida , John Doe, Ash Star Huda Kattan..."/>
                </div>
            </div>
        </div>
    )

}
export default Banner