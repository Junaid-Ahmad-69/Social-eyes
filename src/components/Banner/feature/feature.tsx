import {IBannerFeature} from "../../../../utils/Interfaces/types";

const feature: React.FC<IBannerFeature> = ({title, desc}) => {
    return (
        <div className="social_eye_feature_wrapper">
            <section className="bg-white shadow-2xl p-4 rounded-2xl">
                <h2 className="mb-2 text-lg font-semibold text-slate-700">{title}</h2>
                <div className="w-full">
                    <p className="text-md text-neutral-500 social_eye_feature_hidden">{desc}</p>
                </div>
            </section>
        </div>
    )
}
export default feature